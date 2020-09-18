import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { ITEM_MASTER } from 'src/app/model/ITEM_MASTER';
import { SalesMastersService } from '../sales-masters.service'
@Component({
  selector: 'app-sales-item-master',
  templateUrl: './sales-item-master.component.html',
  styleUrls: ['./sales-item-master.component.css']
})
export class SalesItemMasterComponent implements OnInit {
  itemMasterTableResponse: ITEM_MASTER[];
  displayBasic: boolean;
  submitted: boolean;
  newItem: boolean;
  loading: boolean;
  I_CODE: number;
  itemForm: FormGroup;
  item_cat_list: SelectItem[] = [];
  sel_item_cat_list: SelectItem[] = [];
  item_subcat_list = [];

  constructor(
    private service: SalesMastersService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {
  }

  ngOnInit() {
    this.loading = true;
    this.service.getItemMasterTableResponse().subscribe(
      data => {
        this.itemMasterTableResponse = data;
        this.loading = false;
      }
    );
    this.service.getItemCat().subscribe(
      data => {
        for (let item of data) {
          this.item_cat_list.push({ label: item.I_CAT_NAME, value: item.I_CAT_CODE })
        }
      }
    );
    this.service.getItemSubCat().subscribe(
      data => {
        for (let item of data) {
          this.item_subcat_list.push({ SCAT_CODE: item.SCAT_CODE, SCAT_CAT_CODE: item.SCAT_CAT_CODE, SCAT_DESC: item.SCAT_DESC })
        }
        console.log(this.item_subcat_list)
      }
    );

    this.itemForm = this.fb.group({
      I_CODENO: ['', Validators.required],
      I_NAME: ['', Validators.required],
      I_CAT_NAME: ['', Validators.required],
      I_SCAT_NAME: [{ value: '', disabled: true }, Validators.required]
    });
  }


  addNewItem() {
    this.displayBasic = true;
    this.submitted = false;
    this.newItem = true;
  }

  get f() {
    return this.itemForm.controls;
  }
  onItemSelected(event) {
    this.sel_item_cat_list = [];
    this.item_subcat_list.filter(item => {
      if (item.SCAT_CAT_CODE === event.value) {
        this.sel_item_cat_list.push({ label: item.SCAT_DESC, value: item.SCAT_CODE })
      }
    })
    if (this.sel_item_cat_list.length > 0) {
      this.f['I_SCAT_NAME'].enable();
      this.f['I_SCAT_NAME'].setValidators([Validators.required])
    } else {
      this.f['I_SCAT_NAME'].disable();
      this.f['I_SCAT_NAME'].clearValidators();
    }
  }
  resetItemForm() {
    this.itemForm.reset();
    this.f['I_SCAT_NAME'].setValue('');
    this.f['I_CAT_NAME'].setValue('');
    this.f['I_CODENO'].setValue('');
    this.f['I_NAME'].setValue('');

  }
  deleteTableRow(I_CODE: string, index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete?',
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      key: 'c1',
      accept: () => {
        this.service.deleteTable('ITEM_MASTER', 'I_CODE=' + I_CODE).subscribe(
          data => {
            this.loading = true;
            this.itemMasterTableResponse = []
            this.service.getItemMasterTableResponse().subscribe(
              data => {
                this.itemMasterTableResponse = data;
                this.loading = false
              }
            );
            this.messageService.add({ key: 't1', severity: 'success', summary: 'Delete Message', detail: 'Deleted Successfully' });
            this.itemMasterTableResponse.splice(index, 1);

          }
        )
      }
    });
  }
  editItem(itemMasterTableResponse: ITEM_MASTER) {
    this.displayBasic = true;
    this.I_CODE = itemMasterTableResponse.I_CODE;
    this.f['I_SCAT_NAME'].enable();
    this.f['I_SCAT_NAME'].setValue(itemMasterTableResponse.I_SUBCAT_CODE);
    this.f['I_CAT_NAME'].setValue(itemMasterTableResponse.I_CAT_CODE);
    this.item_subcat_list.filter(item => {
      if (item.SCAT_CAT_CODE === itemMasterTableResponse.I_CAT_CODE) {
        this.sel_item_cat_list.push({ label: item.SCAT_DESC, value: item.SCAT_CODE })
      }
    });
    if (this.sel_item_cat_list.length > 0) {
      this.f['I_SCAT_NAME'].setValidators([Validators.required]);

    } else {
      this.f['I_SCAT_NAME'].disable();
      this.f['I_SCAT_NAME'].clearValidators();
    }
    this.f['I_CODENO'].setValue(itemMasterTableResponse.I_CODENO);
    this.f['I_NAME'].setValue(itemMasterTableResponse.I_NAME)

  }
  save() {
    console.log(this.f['I_CODENO'].value, this.f['I_NAME'].value, this.f['I_SCAT_NAME'].value, this.f['I_CAT_NAME'].value)
    this.submitted = true;
    if (this.itemForm.invalid) {
      this.messageService.add({ key: "t2", severity: 'error', summary: 'Error', detail: 'Please Fill all required fields' });
      return;
    }
    if (this.newItem == true) {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to save?',
        header: 'Save Confirmation',
        icon: 'fas fa-save',
        accept: () => {
          this.service.insertItemMaster(this.f['I_CODENO'].value, this.f['I_NAME'].value, this.f['I_SCAT_NAME'].value, this.f['I_CAT_NAME'].value).subscribe(
            res => {
              this.itemMasterTableResponse = [];

              this.service.getItemMasterTableResponse().subscribe(
                data => {
                  this.itemMasterTableResponse = data

                }
              );
              this.displayBasic = false;
              this.messageService.add({ key: "t1", severity: 'success', summary: 'Success', detail: 'Added Successfully' });
            });
        }
      });
    } else {
      this.confirmationService.confirm({
        message: 'Are you sure that you want to Update?',
        header: 'Update Confirmation',
        icon: 'fas fa-save',
        accept: () => {
          this.service.updateItemMaster(this.f['I_CODENO'].value, this.f['I_NAME'].value, this.f['I_SCAT_NAME'].value, this.f['I_CAT_NAME'].value, this.I_CODE).subscribe(
            res => {
              this.itemMasterTableResponse = []
              this.service.getItemMasterTableResponse().subscribe(
                data => {
                  this.itemMasterTableResponse = data;
                  console.log(this.itemMasterTableResponse)
                }
              );
              this.displayBasic = false;
              this.messageService.add({ key: "t1", severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
            });
        }
      });
    }
  }
}