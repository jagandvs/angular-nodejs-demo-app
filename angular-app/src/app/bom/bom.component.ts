import { Component, OnInit } from '@angular/core';
import { BOM_MASTER } from '../model/BOM_MASTER';
import { BOM_MASTER_LIST } from '../model/BOM_MASTER_LIST';
import { BOM_MASTER_TABLE } from '../model/BOM_MASTER_TABLE';
import { ITEM_MASTER } from '../model/ITEM_MASTER';
import { BOM_DETAIL } from '../model/BOM_DETAIL';
import { MATERIAL_TABLE } from '../model/MATERIAL_TABLE';
import { BomserviceService } from './bom_service/bomservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ITEM_UNIT_MASTER } from '../model/ITEM_UNIT_MASTER';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService, SelectItem, LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css']
})
export class BomComponent implements OnInit {
  bom_master_list: BOM_MASTER_LIST[];
  bom_master_table: BOM_MASTER_TABLE[] = [];
  displayBasic: Boolean;
  item_master: ITEM_MASTER[];
  bom_master: BOM_MASTER;
  unit_master_list: ITEM_UNIT_MASTER[];
  material_table: MATERIAL_TABLE[] = [];
  user: string;
  bom_detail: BOM_DETAIL[] = [];
  unit_value: string;
  productForm: FormGroup;
  materialForm: FormGroup;
  submitted: boolean = false;
  I_CODENO: SelectItem[] = [];
  I_NAME: SelectItem[] = [];
  clonedProducts: { [s: string]: MATERIAL_TABLE; } = {};
  loading: boolean;
  newItem: boolean;
  BM_CODE: number;
  constructor(
    private bomservice: BomserviceService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem('username')
    this.productForm = this.fb.group({
      I_CODENO: ['', Validators.required],
      unit_value: [{ value: '', disabled: true }, Validators.required],
      I_NAME: ['', Validators.required]
    });
    this.materialForm = this.fb.group({
      I_CODENO: ['', Validators.required],
      unit_value: [{ value: '', disabled: true }, Validators.required],
      I_NAME: ['', Validators.required],
      VQTY: ['', Validators.required],
      SQTY: ['']
    });

    this.item_master = this.route.snapshot.data['item_master'];
    this.bom_master_list = this.route.snapshot.data['bom_master'];
    this.unit_master_list = this.route.snapshot.data['unit_master'];

    for (let list of this.bom_master_list) {
      this.bom_master_table.push({ BM_TABLE_I_CODE: list.BM_I_CODE, BM_TABLE_CODE: list.BM_CODE, BM_TABLE_I_CODENO: this.materialCode(list.BM_I_CODE), BM_TABLE_NAME: this.materialName(list.BM_I_CODE) })
    }
    for (let items of this.item_master) {
      this.I_CODENO.push({ label: items.I_CODENO, value: items.I_CODE });
      this.I_NAME.push({ label: items.I_NAME, value: items.I_CODE });
    }
  }

  get f() {
    return this.productForm.controls;
  }
  get m() {
    return this.materialForm.controls;
  }
  addNewItem() {
    this.bom_detail = [];
    this.displayBasic = true;
    this.submitted = false;
    this.newItem = true;
  }
  editItem(bom_master_table: BOM_MASTER_TABLE) {
    this.newItem = false;
    this.submitted = false;
    this.material_table = [];
    this.bom_detail = [];
    this.BM_CODE = bom_master_table.BM_TABLE_CODE;
    this.f['I_CODENO'].setValue(bom_master_table.BM_TABLE_I_CODE);
    this.f['I_NAME'].setValue(bom_master_table.BM_TABLE_I_CODE);
    this.getUnit(this.f['I_NAME'].value, -1);
    this.bomservice.getBomDetailTable(bom_master_table.BM_TABLE_CODE).subscribe(
      data => {
        this.bom_detail = data;
      }
    ).add(
      () => {
        for (let detail of this.bom_detail) {
          this.material_table.push({ id: this.material_table.length + 1, RAW_MAT_CDE: this.materialCode(detail.BD_I_CODE), RAW_MAT_NAME: this.materialName(detail.BD_I_CODE), SQTY: detail.BD_SCRAPQTY, UNIT_VALUE: this.getUnitCodeValue(detail.BD_I_CODE), VQTY: detail.BD_VQTY, CODE: detail.BD_I_CODE });
        }
      }
    );
    this.displayBasic = true;
  }
  deleteBomTableRow(bom_master_table: BOM_MASTER_TABLE, index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key: 'c1',
      accept: () => {
        this.bomservice.deleteBomTable(bom_master_table.BM_TABLE_CODE).subscribe(
          data => {
            this.messageService.add({ key: 't1', severity: 'success', summary: 'Delete Message', detail: data });
            this.bom_master_table.splice(index, 1);
          }
        )
      }
    });
  }
  onProdcodeNoSelected() {
    this.f['I_NAME'].setValue(this.f['I_CODENO'].value);
    console.log(typeof (this.f['I_CODENO'].value))
    this.getUnit(this.f['I_NAME'].value, -1)

  }
  onProdNameSelected() {
    this.f['I_CODENO'].setValue(this.f['I_NAME'].value)
    this.getUnit(this.f['I_CODENO'].value, -1)
  }
  onMaterialcodeNoSelected() {
    this.m['I_NAME'].setValue(this.m['I_CODENO'].value);
    this.getUnit(this.m['I_NAME'].value, -2)
  }
  onMaterialNameSelected() {
    this.m['I_CODENO'].setValue(this.m['I_NAME'].value);
    console.log(this.m['I_NAME'].value)
    this.getUnit(this.m['I_CODENO'].value, -2)
  }
  getUnit(i_code: number, index: number) {
    for (let items of this.item_master) {
      if (items.I_CODE == i_code) {
        if (index == -1) {
          this.f['unit_value'].setValue(items.I_UOM_CODE);
        } else if (index == -2) {
          this.m['unit_value'].setValue(items.I_UOM_CODE);
        }
      }
    }
  }
  resetMaterialForm() {
    this.m["I_CODENO"].setValue(0);
    this.m["unit_value"].setValue('');
    this.m["I_NAME"].setValue('');
    this.m["VQTY"].setValue('');
    this.m["SQTY"].setValue('');
    this.submitted = false;

  }
  resetproductForm() {
    this.f['I_CODENO'].setValue(0);
    this.f['I_NAME'].setValue('');
    this.f['unit_value'].setValue('');
    this.submitted = false;
    this.material_table = [];
  }
  materialCode(cde: number): string {
    for (let code of this.item_master) {
      if (cde == code.I_CODE) {
        return code.I_CODENO;
      }
    }
  }
  materialValue(cde: number): string {
    for (let code of this.unit_master_list) {
      if (cde == code.I_UOM_CODE) {
        return code.I_UOM_NAME;
      }
    }
  }
  materialName(cde: number): string {
    for (let code of this.item_master) {
      if (cde == code.I_CODE) {
        return code.I_NAME;
      }
    }
  }
  getMaterialCode(name: string) {
    for (let item of this.item_master) {
      if (item.I_CODENO == name) {
        return item.I_CODE;
      }

    }
  }

  getUnitCodeValue(materialCode: number) {
    for (let items of this.item_master) {
      if (items.I_CODE == materialCode) {
        return this.materialValue(items.I_UOM_CODE);
      }
    }
  }
  addMaterialToTable() {
    this.submitted = true;

    for (let materials of this.material_table) {
      if (materials.RAW_MAT_CDE == this.materialCode(this.m['I_CODENO'].value)) {
        this.messageService.add({ key: "t2", severity: 'info', summary: 'Warning Message', detail: 'Selected Material already added' });
        return;
      }
    }
    if (this.materialForm.invalid || this.productForm.invalid) {
      this.messageService.add({ key: "t2", severity: 'error', summary: 'Error', detail: 'Please Fill all required fields' });
      return;
    }
    this.material_table.push({ id: this.material_table.length + 1, RAW_MAT_CDE: this.materialCode(this.m['I_CODENO'].value), RAW_MAT_NAME: this.materialName(this.m['I_NAME'].value), SQTY: this.m['SQTY'].value, UNIT_VALUE: this.materialValue(this.m['unit_value'].value), VQTY: this.m['VQTY'].value, CODE: this.m['I_NAME'].value });
    this.messageService.add({ key: "t2", severity: 'success', summary: 'success', detail: 'Material Added to the table' });
    this.resetMaterialForm();
    this.submitted = false;
    console.log(this.material_table)
  }

  onMaterialTableRowEditInit(material_table: MATERIAL_TABLE, index: number) {
    console.log(material_table)

    // this.material_table[index] = { id: material_table.id, RAW_MAT_CDE: material_table.CODE, RAW_MAT_NAME: this.materialName(material_table.CODE), SQTY: material_table.SQTY, UNIT_VALUE: material_table.UNIT_VALUE, VQTY: material_table.VQTY, CODE: material_table.CODE };

    this.clonedProducts[material_table.id] = { ...material_table };
    console.log(this.clonedProducts)

  }
  onMaterialTableRowEditSave(material_table: MATERIAL_TABLE, index: number) {
    console.log(material_table.RAW_MAT_CDE, this.clonedProducts[material_table.id].RAW_MAT_CDE)
    let count = 0;
    for (let table of this.material_table) {
      if (table.RAW_MAT_CDE == material_table.RAW_MAT_CDE) {
        count++;
      }
    }
    // if(count>1){
    //   this.ma
    //   return;
    // }
    if (material_table.RAW_MAT_CDE == this.clonedProducts[material_table.id].RAW_MAT_CDE) {
      this.material_table[index] = { id: material_table.id, RAW_MAT_CDE: material_table.RAW_MAT_CDE, RAW_MAT_NAME: material_table.RAW_MAT_NAME, SQTY: material_table.SQTY, UNIT_VALUE: material_table.UNIT_VALUE, VQTY: material_table.VQTY, CODE: Number(material_table.RAW_MAT_NAME) };
    }
    else {
      this.material_table[index] = { id: material_table.id, RAW_MAT_CDE: this.materialCode(Number(material_table.RAW_MAT_CDE)), RAW_MAT_NAME: this.materialName(Number(material_table.RAW_MAT_NAME)), SQTY: material_table.SQTY, UNIT_VALUE: material_table.UNIT_VALUE, VQTY: material_table.VQTY, CODE: Number(material_table.RAW_MAT_NAME) };
      console.log(this.material_table)
    }
    delete this.clonedProducts[material_table.id];
    this.messageService.add({ key: "t2", severity: 'success', summary: 'Success', detail: 'Raw Material   is updated' });
  }
  onMaterialTableRowEditCancel(material_table: MATERIAL_TABLE, index: number) {
    this.material_table[index] = this.clonedProducts[material_table.id];
    delete this.clonedProducts[material_table.id];
  }
  onMaterialTablecodeNo(index: number) {
    this.material_table[index].RAW_MAT_NAME = this.material_table[index].RAW_MAT_CDE;
    this.material_table[index].UNIT_VALUE = this.getUnitCodeValue(Number(this.material_table[index].RAW_MAT_NAME))

  }
  onMaterialTablecodeName(index: number) {
    this.material_table[index].RAW_MAT_CDE = this.material_table[index].RAW_MAT_NAME;
    this.material_table[index].UNIT_VALUE = this.getUnitCodeValue(Number(this.material_table[index].RAW_MAT_CDE))

  }
  onDeleteMaterialTable(index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.material_table.splice(index, 1);
        this.messageService.add({ key: "t2", severity: 'success', summary: 'Successful', detail: 'Deleted' });
      }
    });
  }

  save() {
    if (this.productForm.invalid || this.material_table.length == 0) {
      this.messageService.add({ key: "t2", severity: 'error', summary: 'Error', detail: 'Please Fill all required fields' });
      return;
    }
    if (this.newItem == true) {
      this.bom_master = { BM_I_CODE: this.f['I_CODENO'].value }
      this.confirmationService.confirm({
        message: 'Are you sure that you want to save?',
        header: 'Save Confirmation',
        icon: 'fas fa-save',
        accept: () => {
          this.bomservice.saveBomMaster(this.bom_master).subscribe(
            res => {
              for (let materials of this.material_table) {
                this.bom_detail.push({
                  BD_BM_CODE: res, BD_I_CODE: this.getMaterialCode(materials.RAW_MAT_CDE), BD_SCRAPQTY: materials.SQTY
                  , BD_VQTY: materials.VQTY, ES_DELETE: false
                });
              }
              this.bomservice.saveBomDetail(this.bom_detail).subscribe(
                data => {
                  this.displayBasic = false;
                  this.bom_detail = [];
                  this.resetMaterialForm();
                  this.resetproductForm();
                  this.messageService.add({ key: "t1", severity: 'success', summary: 'Success', detail: 'Added Successfully' });
                  this.bom_master_table.push({ BM_TABLE_CODE: res, BM_TABLE_I_CODE: this.bom_master.BM_I_CODE, BM_TABLE_I_CODENO: this.materialCode(this.bom_master.BM_I_CODE), BM_TABLE_NAME: this.materialName(this.bom_master.BM_I_CODE) });

                }
              )

            }
          );
        },
        reject: () => {
          this.bom_detail = [];
        }
      });
    } else {

      this.bom_master = { BM_I_CODE: this.f['I_CODENO'].value }
      this.confirmationService.confirm({
        message: 'Are you sure that you want to Update?',
        header: 'Update Confirmation',
        icon: 'fas fa-save',
        accept: () => {
          this.bomservice.updateBomMaster(this.bom_master, this.BM_CODE).subscribe(
            res => {
              console.log("save::" + this.material_table)
              this.bom_detail = [];

              for (let materials of this.material_table) {

                this.bom_detail.push({
                  BD_BM_CODE: this.BM_CODE, BD_I_CODE: this.getMaterialCode(materials.RAW_MAT_CDE), BD_SCRAPQTY: materials.SQTY
                  , BD_VQTY: materials.VQTY, ES_DELETE: false
                });
                console.log(this.bom_detail)
              }
              this.bomservice.saveBomDetail(this.bom_detail).subscribe(
                data => {
                  this.displayBasic = false;
                  this.bom_detail = [];

                  this.resetMaterialForm();
                  this.resetproductForm();
                  this.loading = true;
                  this.messageService.add({ key: "t1", severity: 'success', summary: 'Success', detail: 'Added Successfully' });
                  this.bomservice.getBomMaster().subscribe(
                    master => {
                      this.bom_master_table = [];
                      this.bom_master_list = master;
                      for (let list of this.bom_master_list) {
                        this.bom_master_table.push({ BM_TABLE_I_CODE: list.BM_I_CODE, BM_TABLE_CODE: list.BM_CODE, BM_TABLE_I_CODENO: this.materialCode(list.BM_I_CODE), BM_TABLE_NAME: this.materialName(list.BM_I_CODE) })
                      }
                      this.loading = false;
                    }
                  )
                }
              )
            }
          )
        },
        reject: () => {
          this.bom_detail = [];
        }
      });
    }
  }
}

