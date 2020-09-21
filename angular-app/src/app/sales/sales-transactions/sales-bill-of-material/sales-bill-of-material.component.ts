import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { BomTableResponse } from 'src/app/model/BomTableResponse';
import { BOM_DETAIL } from 'src/app/model/BOM_DETAIL';
import { BOM_MASTER } from 'src/app/model/BOM_MASTER';
import { BOM_MASTER_LIST } from 'src/app/model/BOM_MASTER_LIST';
import { ItemTableResponse } from 'src/app/model/ItemTableResponse';
import { MATERIAL_TABLE } from 'src/app/model/MATERIAL_TABLE';
import { SalesTransactionsService } from '../sales-transactions.service';

@Component({
  selector: 'app-sales-bill-of-material',
  templateUrl: './sales-bill-of-material.component.html',
  styleUrls: ['./sales-bill-of-material.component.css']
})
export class SalesBillOfMaterialComponent implements OnInit {
  bomTableResponse: BomTableResponse[];
  itemTableResponse: ItemTableResponse[];
  bom_detail: BOM_DETAIL[];
  bom_master: BOM_MASTER;
  material_table: MATERIAL_TABLE[] = [];

  displayBasic: boolean;
  newItem: boolean;
  submitted: boolean;
  BM_CODE: number;

  productForm: FormGroup;
  materialForm: FormGroup;

  I_CODENO: SelectItem[] = [];
  I_NAME: SelectItem[] = [];
  I_UOM_NAME: SelectItem[] = [];
  clonedProducts: { [s: string]: MATERIAL_TABLE; } = {};
  constructor(
    private service: SalesTransactionsService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.bomTableResponse = this.route.snapshot.data['bomTable'];
    this.itemTableResponse = this.route.snapshot.data['itemTable'];
    console.log(this.itemTableResponse);
    console.log(this.bomTableResponse);
    this.productForm = this.fb.group({
      I_CODENO: ['', Validators.required],
      I_UOM_NAME: [{ value: '', disabled: true }, Validators.required],
      I_NAME: ['', Validators.required]
    });
    this.materialForm = this.fb.group({
      I_CODENO: ['', Validators.required],
      I_UOM_NAME: [{ value: '', disabled: true }, Validators.required],
      I_NAME: ['', Validators.required],
      VQTY: ['', Validators.required],
      SQTY: ['']
    });

    for (let items of this.itemTableResponse) {
      this.I_CODENO.push({ label: items.I_CODENO, value: items.I_CODE });
      this.I_NAME.push({ label: items.I_NAME, value: items.I_CODE });
      this.I_UOM_NAME.push({ label: items.I_UOM_NAME, value: items.I_CODE });
    }
  }

  get f() {
    return this.productForm.controls;
  }
  get m() {
    return this.materialForm.controls;
  }
  printInvoice(bm_code: string, pg: number) {

    this.router.navigate(['sales/transaction/invoice'], { queryParams: { bm_code: bm_code, pg: pg } })
  }

  deleteBomTableRow(bm_code: string, index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key: 'c1',
      accept: () => {
        this.service.deleteTable('BOM_MASTER', 'BM_CODE=' + bm_code).subscribe(
          data => {
            this.service.deleteTable('BOM_DETAIL', 'BD_BM_CODE=' + bm_code).subscribe(
              data2 => {
                this.messageService.add({ key: 't1', severity: 'success', summary: 'Delete Message', detail: 'Deleted Successfully' });
                this.bomTableResponse.splice(index, 1);
              }
            )
          }
        )
      }
    });
  }
  addNewItem() {
    this.bom_detail = [];
    this.displayBasic = true;
    this.submitted = false;
    this.newItem = true;
  }

  onProdSelected(event) {
    this.f['I_CODENO'].setValue(event.value);
    this.f['I_NAME'].setValue(event.value);
    this.f['I_UOM_NAME'].setValue(event.value);
  }
  onMaterialSelected(event) {
    this.m['I_CODENO'].setValue(event.value);
    this.m['I_NAME'].setValue(event.value);
    this.m['I_UOM_NAME'].setValue(event.value);
  }

  getItemTableRow(I_CODE: number): ItemTableResponse {
    return this.itemTableResponse.filter(item => item.I_CODE == I_CODE)[0]
  }

  addMaterialToTable() {
    this.submitted = true;
    if (this.materialForm.invalid || this.productForm.invalid) {
      this.messageService.add({ key: "t2", severity: 'error', summary: 'Error', detail: 'Please Fill all required fields' });
      return;
    } else if (!this.material_table.some((item) => item.MAT_I_CODE == this.m['I_CODENO'].value)) {

      let mat_table = this.getItemTableRow(this.m['I_CODENO'].value)
      console.log(mat_table)
      this.material_table.push({ id: this.material_table.length + 1, MAT_I_CODE: this.m['I_CODENO'].value, MAT_I_CODENO: mat_table.I_CODENO, MAT_I_NAME: mat_table.I_NAME, MAT_I_UOM_NAME: mat_table.I_UOM_NAME, SQTY: this.m['SQTY'].value, VQTY: this.m['VQTY'].value })
      this.messageService.add({ key: "t2", severity: 'success', summary: 'success', detail: 'Material Added to the table' });
      this.resetMaterialForm();
      this.submitted = false;
    } else {
      this.messageService.add({ key: "t2", severity: 'info', summary: 'Warning Message', detail: 'Selected Material already added' });
      return;
    }
  }
  resetMaterialForm() {
    this.m["I_CODENO"].setValue(0);
    this.m["I_UOM_NAME"].setValue('');
    this.m["I_NAME"].setValue('');
    this.m["VQTY"].setValue('');
    this.m["SQTY"].setValue('');
    this.submitted = false;

  }
  resetproductForm() {
    this.f['I_CODENO'].setValue(0);
    this.f['I_NAME'].setValue('');
    this.f['I_UOM_NAME'].setValue('');
    this.submitted = false;
    this.material_table = [];
  }

  onMaterialTableRowEditInit(material_table: MATERIAL_TABLE, index: number) {
    console.log(material_table)
    this.clonedProducts[material_table.id] = { ...material_table };
    console.log(this.clonedProducts)
  }
  onMaterialTableRowEditSave(material_table: MATERIAL_TABLE, index: number) {
    // console.log(material_table.RAW_MAT_CDE, this.clonedProducts[material_table.id].RAW_MAT_CDE)
    let count = 0;
    let mat_table = this.getItemTableRow(material_table.MAT_I_CODE)
    if (material_table.MAT_I_CODE == this.clonedProducts[material_table.id].MAT_I_CODE) {
      this.material_table[index] = { id: material_table.id, MAT_I_CODE: mat_table.I_CODE, MAT_I_NAME: mat_table.I_NAME, SQTY: material_table.SQTY, MAT_I_UOM_NAME: mat_table.I_UOM_NAME, VQTY: material_table.VQTY, MAT_I_CODENO: mat_table.I_CODENO };
    }
    else {
      this.material_table[index] = { id: material_table.id, MAT_I_CODENO: mat_table.I_CODENO, MAT_I_NAME: mat_table.I_NAME, SQTY: material_table.SQTY, MAT_I_UOM_NAME: mat_table.I_UOM_NAME, VQTY: material_table.VQTY, MAT_I_CODE: mat_table.I_CODE };
      console.log(this.material_table)
    }
    delete this.clonedProducts[material_table.id];
    this.messageService.add({ key: "t2", severity: 'success', summary: 'Success', detail: 'Raw Material   is updated' });
  }
  onMaterialTableRowEditCancel(material_table: MATERIAL_TABLE, index: number) {
    this.material_table[index] = this.clonedProducts[material_table.id];
    delete this.clonedProducts[material_table.id];
  }
  onMaterialTableChange(event, index: number) {
    let mat_table = this.getItemTableRow(event.value);
    this.material_table[index].MAT_I_CODENO = event.value;
    this.material_table[index].MAT_I_NAME = event.value;
    this.material_table[index].MAT_I_UOM_NAME = mat_table.I_UOM_NAME;
    this.material_table[index].MAT_I_CODE = event.value;
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
  editItem(bomTable: BomTableResponse) {
    this.newItem = false;
    this.submitted = false;
    this.material_table = [];
    this.bom_detail = [];
    this.BM_CODE = bomTable.BM_CODE;
    this.f['I_CODENO'].setValue(bomTable.BM_I_CODE);
    this.f['I_NAME'].setValue(bomTable.BM_I_CODE);
    this.f['I_UOM_NAME'].setValue(bomTable.BM_I_CODE);

    this.service.getBomDetailTable(bomTable.BM_CODE).subscribe(
      data => {
        this.bom_detail = data;
        console.log(this.bom_detail)
      }
    ).add(
      () => {

        for (let detail of this.bom_detail) {
          let bomDetailTable = this.getItemTableRow(detail.BD_I_CODE)
          this.material_table.push({ id: this.material_table.length + 1, MAT_I_CODENO: bomDetailTable.I_CODENO, MAT_I_NAME: bomDetailTable.I_NAME, SQTY: detail.BD_SCRAPQTY, MAT_I_UOM_NAME: bomDetailTable.I_UOM_NAME, VQTY: detail.BD_VQTY, MAT_I_CODE: detail.BD_I_CODE });
        }
      }
    );
    this.displayBasic = true;
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
          this.service.saveBomMaster(this.bom_master).subscribe(
            res => {
              for (let materials of this.material_table) {
                console.log(materials)
                this.bom_detail.push({
                  BD_BM_CODE: res, BD_I_CODE: materials.MAT_I_CODE, BD_SCRAPQTY: materials.SQTY
                  , BD_VQTY: materials.VQTY, ES_DELETE: false
                });
              }
              this.service.saveBomDetail(this.bom_detail).subscribe(
                data => {
                  this.displayBasic = false;
                  this.bom_detail = [];
                  this.resetMaterialForm();
                  this.resetproductForm();
                  this.messageService.add({ key: "t1", severity: 'success', summary: 'Success', detail: 'Added Successfully' });
                  this.bomTableResponse.push({ BM_CODE: res, BM_I_CODE: this.bom_master.BM_I_CODE, I_CODENO: this.getItemTableRow(this.bom_master.BM_I_CODE).I_CODENO, I_NAME: this.getItemTableRow(this.bom_master.BM_I_CODE).I_NAME });

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
          this.service.updateBomMaster(this.bom_master, this.BM_CODE).subscribe(
            res => {
              console.log("save::" + this.material_table)
              this.bom_detail = [];

              for (let materials of this.material_table) {

                this.bom_detail.push({
                  BD_BM_CODE: this.BM_CODE, BD_I_CODE: materials.MAT_I_CODE, BD_SCRAPQTY: materials.SQTY
                  , BD_VQTY: materials.VQTY, ES_DELETE: false
                });
                console.log(this.bom_detail)
              }
              this.service.saveBomDetail(this.bom_detail).subscribe(
                data => {
                  this.displayBasic = false;
                  this.bom_detail = [];
                  this.bomTableResponse = [];
                  this.service.getBomTableResponse().subscribe(
                    master => {
                      this.bomTableResponse = master;
                    }
                  )
                  this.resetMaterialForm();
                  this.resetproductForm();
                  this.messageService.add({ key: "t1", severity: 'success', summary: 'Success', detail: 'Added Successfully' });

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