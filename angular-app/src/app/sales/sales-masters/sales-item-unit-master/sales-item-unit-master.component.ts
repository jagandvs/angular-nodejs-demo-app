import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { CommonServicesService } from "src/app/_services/common-services.service";
import { isNull } from "util";
import { SalesMastersService } from "../sales-masters.service";

@Component({
  selector: "app-sales-item-unit-master",
  templateUrl: "./sales-item-unit-master.component.html",
  styleUrls: ["./sales-item-unit-master.component.css"],
})
export class SalesItemUnitMasterComponent implements OnInit {
  public itemUnitMasterTableResponse: any[] = [];
  public itemUnitMasterForm: FormGroup;

  public loading: boolean = false;
  public submitted: boolean = false;
  public newItem: boolean = false;
  public displayBasic: boolean = false;

  public process: string = "";
  constructor(
    private service: SalesMastersService,
    private fb: FormBuilder,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private commonService: CommonServicesService
  ) {}

  ngOnInit() {
    this.getItemUnitMasterTableResponse();

    this.itemUnitMasterForm = this.fb.group({
      I_UOM_NAME: ["", Validators.required],
      I_UOM_DESC: ["", Validators.required],
      I_UOM_CODE: [0],
    });
  }

  get f() {
    return this.itemUnitMasterForm.controls;
  }

  getItemUnitMasterTableResponse() {
    this.loading = true;
    this.itemUnitMasterTableResponse = [];
    this.service.getItemUnitMasterTableResponse().subscribe((data) => {
      this.itemUnitMasterTableResponse = data;
      this.loading = false;
    });
  }

  addNewItem() {
    this.displayBasic = true;
    this.submitted = false;
    this.newItem = true;
  }

  editItem(editableItem: any) {
    console.log(editableItem);
    this.f["I_UOM_NAME"].setValue(editableItem.I_UOM_NAME);
    this.f["I_UOM_DESC"].setValue(editableItem.I_UOM_DESC);
    this.f["I_UOM_CODE"].setValue(editableItem.I_UOM_CODE);
    this.commonService
      .setResetModify(
        "ITEM_UNIT_MASTER",
        "MODIFY",
        "I_UOM_CODE",
        editableItem.I_UOM_CODE,
        0,
        "check"
      )
      .subscribe((data) => {
        console.log(data);
        if (data == 0) {
          this.commonService
            .setResetModify(
              "ITEM_UNIT_MASTER",
              "MODIFY",
              "I_UOM_CODE",
              editableItem.I_UOM_CODE,
              1,
              "setLock"
            )
            .subscribe((data) => {
              this.newItem = false;
              this.displayBasic = true;
              this.submitted = false;
            });
        } else {
          this.messageService.add({
            key: "t1",
            severity: "info",
            summary: "Success",
            detail: "Some one already Successfully",
          });
        }
      });
  }

  cancelItem() {
    this.commonService
      .setResetModify(
        "ITEM_UNIT_MASTER",
        "MODIFY",
        "I_UOM_CODE",
        this.f["I_UOM_CODE"].value,
        0,
        "setLock"
      )
      .subscribe((data) => {
        this.newItem = false;
        this.displayBasic = false;
        this.submitted = false;
        this.itemUnitMasterForm.reset();
      });
  }

  saveItem() {
    this.submitted = true;
    if (this.itemUnitMasterForm.valid) {
      this.newItem ? (this.process = "insert") : (this.process = "update");
      this.confirmationService.confirm({
        message: "Are you sure that you want to save?",
        header: "Save Confirmation",
        icon: "fas fa-save",
        accept: () => {
          this.service
            .CRUDItemUnitMaster(
              this.f["I_UOM_CODE"].value,
              this.f["I_UOM_NAME"].value,
              this.f["I_UOM_DESC"].value,
              false,
              this.process
            )
            .subscribe(
              (data) => {
                this.displayBasic = false;
                this.submitted = false;
                this.getItemUnitMasterTableResponse();
                this.messageService.add({
                  key: "t1",
                  severity: "success",
                  summary: "Success",
                  detail: this.process.toUpperCase() + " Successfully",
                });
              },
              (error) => {
                console.log(error);
              }
            );
        },
      });
    } else {
      this.messageService.add({
        key: "t2",
        severity: "error",
        summary: "Error",
        detail: "Please Fill all required fields",
      });
    }
  }
  cancel() {}
}
