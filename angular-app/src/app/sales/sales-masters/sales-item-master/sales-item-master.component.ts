import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  RequiredValidator,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import { itemMasterTableResponse } from "../../model/itemMasterTableResponse";
import { CommonServicesService } from "src/app/_services/common-services.service";
import { SalesMastersService } from "../sales-masters.service";
import { itemMasterTableRequest } from "../../model/itemMasterTableRequest";

@Component({
  selector: "app-sales-item-master",
  templateUrl: "./sales-item-master.component.html",
  styleUrls: ["./sales-item-master.component.css"],
})
export class SalesItemMasterComponent implements OnInit {
  public itemMasterTableResponse: itemMasterTableResponse[];
  public displayBasic: boolean = false;
  public submitted: boolean = false;
  public newItem: boolean = false;
  public loading: boolean = false;
  public I_CODE: number;
  public itemForm: FormGroup;
  public item_cat_list: SelectItem[] = [];
  public sel_item_cat_list: SelectItem[] = [];
  public item_subcat_list = [];

  itemMasterFieldNames: string =
    "I_CODE,I_CODENO,I_NAME,I_UOM_NAME,I_CAT_NAME,ITEM_MASTER.I_CAT_CODE,I_SCAT_CODE";
  itemMasterTableNames: string =
    "ITEM_MASTER,ITEM_UNIT_MASTER,ITEM_CATEGORY_MASTER";
  itemMasterCondition: string =
    "ITEM_MASTER.I_UOM_CODE=ITEM_UNIT_MASTER.I_UOM_CODE AND ITEM_MASTER.I_CAT_CODE=ITEM_CATEGORY_MASTER.I_CAT_CODE AND ITEM_MASTER.ES_DELETE=0 AND ITEM_UNIT_MASTER.ES_DELETE=0 AND ITEM_CATEGORY_MASTER.ES_DELETE=0";
  constructor(
    private service: SalesMastersService,
    private commonService: CommonServicesService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.commonService
      .getTableResponse(
        this.itemMasterFieldNames,
        this.itemMasterTableNames,
        this.itemMasterCondition
      )
      .subscribe((data) => {
        this.itemMasterTableResponse = data;
        this.loading = false;
      });
    this.commonService
      .getTableResponse(
        "I_CAT_CODE,I_CAT_NAME",
        "ITEM_CATEGORY_MASTER",
        "ES_DELETE=0"
      )
      .subscribe((data) => {
        for (let item of data) {
          this.item_cat_list.push({
            label: item.I_CAT_NAME,
            value: item.I_CAT_CODE,
          });
        }
      });
    this.commonService
      .getTableResponse(
        "SCAT_CODE,SCAT_CAT_CODE,SCAT_DESC",
        "ITEM_SUBCATEGORY_MASTER",
        "ES_DELETE=0"
      )
      .subscribe((data) => {
        for (let item of data) {
          this.item_subcat_list.push({
            SCAT_CODE: item.SCAT_CODE,
            SCAT_CAT_CODE: item.SCAT_CAT_CODE,
            SCAT_DESC: item.SCAT_DESC,
          });
        }
      });

    this.itemForm = this.fb.group({
      I_CODENO: ["", Validators.required],
      I_NAME: ["", Validators.required],
      I_CAT_NAME: ["", Validators.required],
      I_SCAT_NAME: [{ value: "", disabled: true }, Validators.required],
      I_DRAW_NO: [""],
      I_SPECIFICATION: [""],
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
    this.item_subcat_list.filter((item) => {
      if (item.SCAT_CAT_CODE === event.value) {
        this.sel_item_cat_list.push({
          label: item.SCAT_DESC,
          value: item.SCAT_CODE,
        });
      }
    });
    if (this.sel_item_cat_list.length > 0) {
      this.f["I_SCAT_NAME"].enable();
      this.f["I_SCAT_NAME"].setValidators([Validators.required]);
    } else {
      this.f["I_SCAT_NAME"].disable();
      this.f["I_SCAT_NAME"].clearValidators();
    }
  }
  resetItemForm() {
    this.itemForm.reset();
    this.f["I_SCAT_NAME"].setValue("");
    this.f["I_CAT_NAME"].setValue("");
    this.f["I_CODENO"].setValue("");
    this.f["I_NAME"].setValue("");
  }
  deleteTableRow(I_CODE: string, index: number) {
    this.confirmationService.confirm({
      message: "Are you sure that you want to delete?",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      key: "c1",
      accept: () => {
        this.service
          .deleteTable("ITEM_MASTER", "I_CODE=" + I_CODE)
          .subscribe((data) => {
            this.loading = true;
            this.itemMasterTableResponse = [];
            this.commonService
              .getTableResponse(
                this.itemMasterFieldNames,
                this.itemMasterTableNames,
                this.itemMasterCondition
              )
              .subscribe((data) => {
                this.itemMasterTableResponse = data;
                this.loading = false;
              });
            this.messageService.add({
              key: "t1",
              severity: "success",
              summary: "Delete Message",
              detail: "Deleted Successfully",
            });
            this.itemMasterTableResponse.splice(index, 1);
          });
      },
    });
  }
  editItem(itemMasterTableResponse: itemMasterTableResponse) {
    this.displayBasic = true;
    this.I_CODE = itemMasterTableResponse.I_CODE;
    this.f["I_SCAT_NAME"].enable();

    this.f["I_CAT_NAME"].setValue(itemMasterTableResponse.I_CAT_CODE);
    this.item_subcat_list.filter((item) => {
      if (item.SCAT_CAT_CODE === itemMasterTableResponse.I_CAT_CODE) {
        this.sel_item_cat_list.push({
          label: item.SCAT_DESC,
          value: item.SCAT_CODE,
        });
      }
    });
    this.f["I_SCAT_NAME"].setValue(itemMasterTableResponse.I_SUBCAT_CODE);
    if (this.sel_item_cat_list.length) {
      this.f["I_SCAT_NAME"].setValidators([Validators.required]);
    } else {
      this.f["I_SCAT_NAME"].disable();
      this.f["I_SCAT_NAME"].clearValidators();
    }
    this.f["I_CODENO"].setValue(itemMasterTableResponse.I_CODENO);
    this.f["I_NAME"].setValue(itemMasterTableResponse.I_NAME);
  }
  save() {
    this.submitted = true;
    if (this.itemForm.invalid) {
      return this.messageService.add({
        key: "t2",
        severity: "error",
        summary: "Error",
        detail: "Please Fill all required fields",
      });
    }
    if (this.newItem == true) {
      this.confirmationService.confirm({
        message: "Are you sure that you want to save?",
        header: "Save Confirmation",
        icon: "fas fa-save",
        accept: () => {
          this.service
            .insertItemMaster(this.itemForm.value as itemMasterTableRequest)
            .subscribe((res) => {
              this.itemMasterTableResponse = [];

              this.commonService
                .getTableResponse(
                  this.itemMasterFieldNames,
                  this.itemMasterTableNames,
                  this.itemMasterCondition
                )
                .subscribe((data) => {
                  this.itemMasterTableResponse = data;
                });
              this.displayBasic = false;
              this.messageService.add({
                key: "t1",
                severity: "success",
                summary: "Success",
                detail: "Added Successfully",
              });
            });
        },
      });
    } else {
      this.confirmationService.confirm({
        message: "Are you sure that you want to Update?",
        header: "Update Confirmation",
        icon: "fas fa-save",
        accept: () => {
          this.service
            .updateItemMaster(
              this.itemForm.value as itemMasterTableRequest,
              this.I_CODE
            )
            .subscribe((res) => {
              this.itemMasterTableResponse = [];
              this.commonService
                .getTableResponse(
                  this.itemMasterFieldNames,
                  this.itemMasterTableNames,
                  this.itemMasterCondition
                )
                .subscribe((data) => {
                  this.itemMasterTableResponse = data;
                  console.log(this.itemMasterTableResponse);
                });
              this.displayBasic = false;
              this.messageService.add({
                key: "t1",
                severity: "success",
                summary: "Success",
                detail: "Updated Successfully",
              });
            });
        },
      });
    }
  }

  exportExcel() {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.itemMasterTableResponse);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      this.saveAsExcelFile(excelBuffer, "ItemMaster");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then((FileSaver) => {
      let EXCEL_TYPE =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE,
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
}
