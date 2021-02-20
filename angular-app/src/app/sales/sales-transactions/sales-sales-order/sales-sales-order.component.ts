import { Component, OnInit, ɵisListLikeIterable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ConfirmationService, MessageService, SelectItem } from "primeng/api";
import { SalesOrderTableResponse } from "src/app/sales/sales-transactions/model/salesOrderTableResponse";
import { DT_CUSTOMER_PO_DETAIL } from "src/app/sales/sales-transactions/model/DT_CUSTOMER_PO_DETAIL";
import { SalesTransactionsService } from "../sales-transactions.service";
import { CustomerPODetail } from "src/app/model/CustomerPODetail";
import { CustomerPOMaster } from "src/app/model/CustomerPOMaster";
import { MATERIAL_TABLE } from "src/app/model/MATERIAL_TABLE";
import { CommonServicesService } from "src/app/_services/common-services.service";
import { CM_ID, UM_CODE } from "src/app/_helpers/variables";
import { SALES_ORDER } from "src/app/_helpers/SM_CODE";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-sales-sales-order",
  templateUrl: "./sales-sales-order.component.html",
  styleUrls: ["./sales-sales-order.component.css"],
})
export class SalesSalesOrderComponent implements OnInit {
  public salesOrderTableResponse: any[] = [];
  public salesOrderMasterForm: FormGroup;
  public salesOrderDetailForm: FormGroup;

  public menuAccess: boolean = true;
  public addAccess: boolean = true;
  public viewAccess: boolean = true;
  public updateAccess: boolean = true;
  public deleteAccess: boolean = true;
  public printAccess: boolean = true;
  public backDateAccess: boolean = true;

  public loading: boolean = false;
  public displayBasic: boolean = false;
  public newOrder: boolean = false;
  public editInsert: boolean = false;
  public submitted: boolean = false;
  public editIndex: number;
  public editingPKCODE: number;
  public process: string;

  public PO_TYPE_DROPDOWN: SelectItem[] = [];
  public PROJECT_CODE_DROPDOWN: SelectItem[] = [];
  public CUSTOMER_NAME_DROPDOWN: SelectItem[] = [];
  public ITEM_CODENO_DROPDOWN: SelectItem[] = [];
  public ITEM_NAME_DROPDOWN: SelectItem[] = [];
  public UNIT_DROPDOWN: SelectItem[] = [];

  public salesOrderDetailTable: any[] = [];
  public salesOrderDetails: DT_CUSTOMER_PO_DETAIL[] = [];
  public uploadedFiles: any[] = [];

  public PO_TYPE_QUERY: any = {
    TableNames: "SO_TYPE_MASTER",
    fieldNames: "SO_T_CODE,SO_T_DESC",
    condition: `ES_DELETE=0 and SO_T_COMP_ID=${CM_ID} order by SO_T_DESC`,
  };

  public PROJECT_CODE_QUERY: any = {
    TableNames: "PROJECT_CODE_MASTER",
    fieldNames: "PROCM_CODE,PROCM_NAME",
    condition: `PROCM_COMP_ID=${CM_ID} and ES_DELETE=0`,
  };

  public CUSTOMER_NAME_QUERY: any = {
    TableNames: "PARTY_MASTER",
    fieldNames: "P_CODE,P_NAME",
    condition: `ES_DELETE=0 and P_CM_COMP_ID=${CM_ID} and P_TYPE='1' and P_ACTIVE_IND=1 order by P_NAME`,
  };

  public ITEM_CODE_QUERY: any = {
    TableNames: "ITEM_MASTER",
    fieldNames: "I_CODE,I_CODENO",
    condition: `ES_DELETE=0 and I_CM_COMP_ID=${CM_ID} and I_CAT_CODE IN ('-2147483648','-2147483630','-2147483633','-2147483634','-2147483635')  ORDER BY I_CODENO`,
  };

  public ITEM_NAME_QUERY: any = {
    TableNames: "ITEM_MASTER",
    fieldNames: "I_CODE,I_NAME",
    condition: `ES_DELETE=0 and I_CM_COMP_ID=${CM_ID} and I_CAT_CODE IN ('-2147483648','-2147483630','-2147483633','-2147483634','-2147483635')  ORDER BY I_CODENO`,
  };
  public UNIT_QUERY: any = {
    TableNames: "ITEM_UNIT_MASTER",
    fieldNames: "I_UOM_CODE,I_UOM_NAME",
    condition: `ES_DELETE=0 and I_UOM_CM_COMP_ID=${CM_ID} ORDER BY I_UOM_NAME`,
  };

  constructor(
    private service: SalesTransactionsService,
    private route: ActivatedRoute,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private commonService: CommonServicesService
  ) {}
  //#region Intialization of all controls and dropdown values

  ngOnInit() {
    this.loading = true;
    this.commonService
      .checkRight(UM_CODE, SALES_ORDER, "checkRight")
      .subscribe((data) => {
        for (let access of data) {
          this.menuAccess = access.MENU;
          this.addAccess = access.ADD;
          this.deleteAccess = access.DELETE;
          this.viewAccess = access.VIEW;
          this.printAccess = access.PRINT;
          this.backDateAccess = access.BACK_DATE;
          this.updateAccess = access.UPDATE;
        }
        if (this.menuAccess) {
          this.getSalesOrderTableResponse();
          this.getPoType();
          this.getProjectCode();
          this.getUnitDropDown();
          this.getItemCode();
          this.getItemNameDropDown();
          this.getCustomerName();
        } else {
          this.loading = false;
        }
      });
    this.salesOrderMasterForm = this.fb.group({
      CPOM_CODE: [""],
      CPOM_WORK_ODR_NO: [{ value: "", disabled: true }],
      CPOM_DATE: ["", Validators.required],
      CPOM_TYPE: ["", Validators.required],
      CPOM_PROJECT_CODE: ["", Validators.required],
      CPOM_P_CODE: ["", Validators.required],
      CPOM_PONO: ["", Validators.required],
      CPOM_PO_DATE: ["", Validators.required],
    });
    this.salesOrderDetailForm = this.fb.group({
      CPOD_CPOM_CODE: ["", Validators.required],
      CPOD_I_CODE: ["", Validators.required],
      CPOD_UOM_CODE: ["", Validators.required],
      CPOD_ORD_QTY: [0, Validators.required],
      CPOD_GROSS_RATE: [0, Validators.required],
      CPOD_DISC_PER: [0, Validators.required],
      CPOD_RATE: [0, Validators.required],
      CPOD_AMT: [0, Validators.required],
      CPOD_FILE_NAME: ["", Validators.required],
      CPOD_CUST_I_CODE: ["", Validators.required],
      CPOD_CUST_I_NAME: ["", Validators.required],
      CPOD_STATUS: ["", Validators.required],
      CPOD_TRANSPORT_RATE: ["", Validators.required],
      CPOD_DIEAMORTRATE: ["", Validators.required],
      CPOD_DIEAMORTQTY: ["", Validators.required],
      CPOD_CAST_WEIGHT: ["", Validators.required],
      CPOD_FINISH_WEIGHT: ["", Validators.required],
      CPOD_TURNING_WEIGHT: ["", Validators.required],
      CPOD_DISPACH: [""],
      CPOD_DESC: [""],
      CPOD_WO_QTY: [""],
      CPOD_DIEAMORTQTYRETURN: [""],
    });
  }

  get f() {
    return this.salesOrderMasterForm.controls;
  }

  get g() {
    return this.salesOrderDetailForm.controls;
  }
  getSalesOrderTableResponse() {
    this.loading = true;
    this.salesOrderTableResponse = [];
    this.service.getSalesOrderTableResponse().subscribe((data) => {
      this.salesOrderTableResponse = data;
      console.log(this.salesOrderTableResponse);
      this.loading = false;
    });
  }

  addNewSalesOrder() {
    this.displayBasic = true;
    this.salesOrderDetailTable = [];
    this.salesOrderDetails = [];
    this.newOrder = true;
    this.f["CPOM_WORK_ODR_NO"].disable();
  }

  editSalesOrder(salesOrderTableResponse) {
    this.f["CPOM_WORK_ODR_NO"].disable();
    this.newOrder = false;
    console.log(salesOrderTableResponse);
    this.editingPKCODE = salesOrderTableResponse.CPOM_CODE;
    if (this.updateAccess) {
      this.commonService
        .setResetModify(
          "CUSTPO_MASTER",
          "MODIFY",
          "CPOM_CODE",
          salesOrderTableResponse.CPOM_CODE,
          0,
          "check"
        )
        .subscribe((data) => {
          if (data == 0) {
            this.commonService
              .setResetModify(
                "CUSTPO_MASTER",
                "MODIFY",
                "CPOM_CODE",
                salesOrderTableResponse.CPOM_CODE,
                1,
                "setLock"
              )
              .subscribe((data) => {
                this.service
                  .getSalesOrderMasterAndDetail(
                    salesOrderTableResponse.CPOM_CODE,
                    "SelectMaster"
                  )
                  .subscribe((data) => {
                    this.f["CPOM_CODE"].setValue(data[0].CPOM_CODE);
                    this.f["CPOM_WORK_ODR_NO"].setValue(
                      data[0].CPOM_WORK_ODR_NO
                    );
                    this.f["CPOM_DATE"].setValue(new Date(data[0].CPOM_DATE));
                    this.f["CPOM_TYPE"].setValue(data[0].CPOM_TYPE);
                    this.f["CPOM_PROJECT_CODE"].setValue(
                      data[0].CPOM_PROJECT_CODE
                    );
                    this.f["CPOM_P_CODE"].setValue(data[0].CPOM_P_CODE);
                    this.f["CPOM_PONO"].setValue(data[0].CPOM_PONO);
                    this.f["CPOM_PO_DATE"].setValue(
                      new Date(data[0].CPOM_PO_DATE)
                    );
                    this.service
                      .getSalesOrderMasterAndDetail(
                        salesOrderTableResponse.CPOM_CODE,
                        "SelectDetail"
                      )
                      .subscribe(
                        (data) => {
                          this.salesOrderDetails = data;
                          this.displayBasic = true;
                          var status;
                          for (let value of data) {
                            value.CPOD_STATUS == 0
                              ? (status = "Short Close")
                              : (status = "Active");
                            this.salesOrderDetailTable.push({
                              CPOD_CPOM_CODE: value.CPOD_CPOM_CODE,
                              I_CODENO: this.getItemCodeNO(value.CPOD_I_CODE),
                              I_NAME: this.getItemName(value.CPOD_I_CODE),
                              UOM_NAME: this.getUnit(value.CPOD_UOM_CODE),
                              CPOD_ORD_QTY: value.CPOD_ORD_QTY,
                              CPOD_GROSS_RATE: value.CPOD_GROSS_RATE,
                              CPOD_DISC_PER: value.CPOD_DISC_PER,
                              CPOD_RATE: value.CPOD_RATE,
                              CPOD_AMT: value.CPOD_AMT,
                              CPOD_FILE_NAME: value.CPOD_FILE_NAME,
                              CPOD_CUST_I_CODE: value.CPOD_CUST_I_CODE,
                              CPOD_CUST_I_NAME: value.CPOD_CUST_I_NAME,
                              CPOD_STATUS: status,
                              CPOD_TRANSPORT_RATE: value.CPOD_TRANSPORT_RATE,
                              CPOD_DIEAMORTRATE: value.CPOD_DIEAMORTRATE,
                              CPOD_DIEAMORTQTY: value.CPOD_DIEAMORTQTY,
                              CPOD_CAST_WEIGHT: value.CPOD_CAST_WEIGHT,
                              CPOD_FINISH_WEIGHT: value.CPOD_FINISH_WEIGHT,
                              CPOD_TURNING_WEIGHT: value.CPOD_TURNING_WEIGHT,
                            });
                          }
                        },
                        (error: HttpErrorResponse) => {
                          console.log(error);
                        }
                      );
                  }),
                  (error: HttpErrorResponse) => {
                    console.log(error);
                  };
              }),
              (error: HttpErrorResponse) => {
                console.log(error);
              };
          } else {
            this.messageService.add({
              key: "t1",
              severity: "info",
              summary: "Success",
              detail: "Someone Editing the Item/ Item is locked",
            });
          }
        });
    }
  }

  deleteSalesOrder(deleteItem: string) {
    if (this.deleteAccess) {
      this.confirmationService.confirm({
        message: "Are you sure that you want to delete?",
        header: "Delete Confirmation",
        icon: "fas fa-trash",
        key: "c1",
        accept: () => {
          this.commonService
            .deleteRow(
              deleteItem,
              "CPOM_CODE",
              "1",
              "ES_DELETE",
              "CUSTPO_MASTER"
            )
            .subscribe(
              (data) => {
                this.getSalesOrderTableResponse();
                this.messageService.add({
                  key: "t1",
                  severity: "success",
                  summary: "Success",
                  detail: "Deleted Successfully",
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
        key: "t1",
        severity: "warn",
        summary: "Warning",
        detail: "Sorry!! You dont have access to Delete Item",
      });
    }
  }

  getPoType() {
    this.commonService.FillCombo(this.PO_TYPE_QUERY).subscribe((data) => {
      for (let item of data) {
        this.PO_TYPE_DROPDOWN.push({
          label: item.SO_T_DESC,
          value: item.SO_T_CODE,
        });
      }
    });
  }

  getProjectCode() {
    this.commonService.FillCombo(this.PROJECT_CODE_QUERY).subscribe((data) => {
      for (let item of data) {
        this.PROJECT_CODE_DROPDOWN.push({
          label: item.PROCM_NAME,
          value: item.PROCM_CODE,
        });
      }
    });
  }

  getCustomerName() {
    this.commonService.FillCombo(this.CUSTOMER_NAME_QUERY).subscribe((data) => {
      for (let item of data) {
        this.CUSTOMER_NAME_DROPDOWN.push({
          label: item.P_NAME,
          value: item.P_CODE,
        });
      }
    });
  }

  getItemCode() {
    this.commonService.FillCombo(this.ITEM_CODE_QUERY).subscribe((data) => {
      for (let item of data) {
        this.ITEM_CODENO_DROPDOWN.push({
          label: item.I_CODENO,
          value: item.I_CODE,
        });
      }
    });
  }

  getItemNameDropDown() {
    this.commonService.FillCombo(this.ITEM_NAME_QUERY).subscribe((data) => {
      for (let item of data) {
        this.ITEM_NAME_DROPDOWN.push({
          label: item.I_NAME,
          value: item.I_CODE,
        });
      }
    });
  }

  getUnitDropDown() {
    this.commonService.FillCombo(this.UNIT_QUERY).subscribe((data) => {
      for (let item of data) {
        this.UNIT_DROPDOWN.push({
          label: item.I_UOM_NAME,
          value: item.I_UOM_CODE,
        });
      }
    });
  }
  getItemCodeNO(code: number) {
    var label;
    this.ITEM_CODENO_DROPDOWN.map((data) => {
      if (data.value == code) {
        label = data.label;
      }
    });
    return label;
  }
  getItemName(code: number) {
    var label;
    this.ITEM_NAME_DROPDOWN.map((data) => {
      if (data.value == code) {
        label = data.label;
      }
    });
    return label;
  }
  getUnit(code: number) {
    var label;
    this.UNIT_DROPDOWN.map((data) => {
      if (data.value == code) {
        label = data.label;
      }
    });
    return label;
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }
  insertIntoTable() {
    if (!(this.salesOrderDetailForm.valid || this.salesOrderMasterForm.valid)) {
      this.messageService.add({
        key: "t2",
        severity: "error",
        summary: "Error",
        detail: "Please Fill All required fields",
      });
      return;
    }
    if (this.editInsert) {
      this.salesOrderDetails.splice(
        this.editIndex,
        1,
        this.salesOrderDetailForm.value
      );
      this.salesOrderDetailTable.splice(this.editIndex, 1, {
        CPOD_CPOM_CODE: this.g["CPOD_CPOM_CODE"].value,
        I_CODENO: this.getItemCodeNO(this.g["CPOD_I_CODE"].value),
        I_NAME: this.getItemName(this.g["CPOD_I_CODE"].value),
        UOM_NAME: this.getUnit(this.g["CPOD_UOM_CODE"].value),
        CPOD_ORD_QTY: this.g["CPOD_ORD_QTY"].value,
        CPOD_GROSS_RATE: this.g["CPOD_GROSS_RATE"].value,
        CPOD_DISC_PER: this.g["CPOD_DISC_PER"].value,
        CPOD_RATE: this.g["CPOD_RATE"].value,
        CPOD_AMT: this.g["CPOD_AMT"].value,
        CPOD_FILE_NAME: this.g["CPOD_FILE_NAME"].value,
        CPOD_CUST_I_CODE: this.g["CPOD_CUST_I_CODE"].value,
        CPOD_CUST_I_NAME: this.g["CPOD_CUST_I_NAME"].value,
        CPOD_STATUS: this.g["CPOD_STATUS"].value,
        CPOD_TRANSPORT_RATE: this.g["CPOD_TRANSPORT_RATE"].value,
        CPOD_DIEAMORTRATE: this.g["CPOD_DIEAMORTRATE"].value,
        CPOD_DIEAMORTQTY: this.g["CPOD_DIEAMORTQTY"].value,
        CPOD_CAST_WEIGHT: this.g["CPOD_CAST_WEIGHT"].value,
        CPOD_FINISH_WEIGHT: this.g["CPOD_FINISH_WEIGHT"].value,
        CPOD_TURNING_WEIGHT: this.g["CPOD_TURNING_WEIGHT"].value,
      });
      this.editInsert = false;
      this.salesOrderDetailForm.reset();
    } else {
      this.salesOrderDetails.push(this.salesOrderDetailForm.value);
      console.log(this.salesOrderDetails);

      this.salesOrderDetailTable.push({
        CPOD_CPOM_CODE: this.g["CPOD_CPOM_CODE"].value,
        I_CODENO: this.getItemCodeNO(this.g["CPOD_I_CODE"].value),
        I_NAME: this.getItemName(this.g["CPOD_I_CODE"].value),
        UOM_NAME: this.getUnit(this.g["CPOD_UOM_CODE"].value),
        CPOD_ORD_QTY: this.g["CPOD_ORD_QTY"].value,
        CPOD_GROSS_RATE: this.g["CPOD_GROSS_RATE"].value,
        CPOD_DISC_PER: this.g["CPOD_DISC_PER"].value,
        CPOD_RATE: this.g["CPOD_RATE"].value,
        CPOD_AMT: this.g["CPOD_AMT"].value,
        CPOD_FILE_NAME: this.g["CPOD_FILE_NAME"].value,
        CPOD_CUST_I_CODE: this.g["CPOD_CUST_I_CODE"].value,
        CPOD_CUST_I_NAME: this.g["CPOD_CUST_I_NAME"].value,
        CPOD_STATUS: this.g["CPOD_STATUS"].value,
        CPOD_TRANSPORT_RATE: this.g["CPOD_TRANSPORT_RATE"].value,
        CPOD_DIEAMORTRATE: this.g["CPOD_DIEAMORTRATE"].value,
        CPOD_DIEAMORTQTY: this.g["CPOD_DIEAMORTQTY"].value,
        CPOD_CAST_WEIGHT: this.g["CPOD_CAST_WEIGHT"].value,
        CPOD_FINISH_WEIGHT: this.g["CPOD_FINISH_WEIGHT"].value,
        CPOD_TURNING_WEIGHT: this.g["CPOD_TURNING_WEIGHT"].value,
      });
      this.salesOrderDetailForm.reset();
    }
  }

  editSalesOrderDetail(index: number) {
    this.editInsert = true;
    this.editIndex = index;
    console.log(this.salesOrderDetails[index]);
    this.g["CPOD_CPOM_CODE"].setValue(
      this.salesOrderDetails[index].CPOD_CPOM_CODE
    );
    this.g["CPOD_I_CODE"].setValue(this.salesOrderDetails[index].CPOD_I_CODE);
    this.g["CPOD_UOM_CODE"].setValue(
      this.salesOrderDetails[index].CPOD_UOM_CODE
    );
    this.g["CPOD_ORD_QTY"].setValue(this.salesOrderDetails[index].CPOD_ORD_QTY);
    this.g["CPOD_GROSS_RATE"].setValue(
      this.salesOrderDetails[index].CPOD_GROSS_RATE
    );
    this.g["CPOD_DISC_PER"].setValue(
      this.salesOrderDetails[index].CPOD_DISC_PER
    );
    this.g["CPOD_RATE"].setValue(this.salesOrderDetails[index].CPOD_RATE);
    this.g["CPOD_AMT"].setValue(this.salesOrderDetails[index].CPOD_AMT);
    this.g["CPOD_FILE_NAME"].setValue(
      this.salesOrderDetails[index].CPOD_FILE_NAME
    );
    this.g["CPOD_CUST_I_CODE"].setValue(
      this.salesOrderDetails[index].CPOD_CUST_I_CODE
    );
    this.g["CPOD_CUST_I_NAME"].setValue(
      this.salesOrderDetails[index].CPOD_CUST_I_NAME
    );
    this.g["CPOD_STATUS"].setValue(this.salesOrderDetails[index].CPOD_STATUS);
    this.g["CPOD_TRANSPORT_RATE"].setValue(
      this.salesOrderDetails[index].CPOD_TRANSPORT_RATE
    );
    this.g["CPOD_DIEAMORTRATE"].setValue(
      this.salesOrderDetails[index].CPOD_DIEAMORTRATE
    );
    this.g["CPOD_DIEAMORTQTY"].setValue(
      this.salesOrderDetails[index].CPOD_DIEAMORTQTY
    );
    this.g["CPOD_CAST_WEIGHT"].setValue(
      this.salesOrderDetails[index].CPOD_FINISH_WEIGHT
    );
    this.g["CPOD_FINISH_WEIGHT"].setValue(
      this.salesOrderDetails[index].CPOD_FINISH_WEIGHT
    );
    this.g["CPOD_TURNING_WEIGHT"].setValue(
      this.salesOrderDetails[index].CPOD_TURNING_WEIGHT
    );
    this.g["CPOD_DISPACH"].setValue(this.salesOrderDetails[index].CPOD_DISPACH);
    this.g["CPOD_DESC"].setValue(this.salesOrderDetails[index].CPOD_DESC);
    this.g["CPOD_WO_QTY"].setValue(this.salesOrderDetails[index].CPOD_WO_QTY);
    this.g["CPOD_DIEAMORTQTYRETURN"].setValue(
      this.salesOrderDetails[index].CPOD_DIEAMORTQTYRETURN
    );
  }

  deleteSalesOrderDetail(index) {
    this.salesOrderDetails.splice(index, 1);
    this.salesOrderDetailTable.splice(index, 1);
  }

  itemCode(event: any) {
    console.log(event);
    this.service.Item_SelectedIndexChanged(event).subscribe((data) => {
      this.g["CPOD_UOM_CODE"].setValue(data.CPOD_UOM_CODE);
      this.g["CPOD_CUST_I_NAME"].setValue(data.CPOD_CUST_I_NAME);
      this.g["CPOD_CUST_I_CODE"].setValue(data.CPOD_CUST_I_CODE);
      this.g["CPOD_I_CODE"].setValue(event);
    });
  }
  // CPOD_ORD_QTY: this.g["CPOD_ORD_QTY"].value,
  // CPOD_GROSS_RATE: this.g["CPOD_GROSS_RATE"].value,
  // CPOD_DISC_PER: this.g["CPOD_DISC_PER"].value,
  // CPOD_RATE: this.g["CPOD_RATE"].value,
  // CPOD_AMT: this.g["CPOD_AMT"].value,
  validateAmount() {
    console.log(this.g["CPOD_DISC_PER"].value);
    if (
      this.g["CPOD_DISC_PER"].value == 0 ||
      this.g["CPOD_DISC_PER"].value == null
    ) {
      this.g["CPOD_RATE"].setValue(this.g["CPOD_GROSS_RATE"].value);
    } else {
      this.g["CPOD_RATE"].setValue(
        this.g["CPOD_GROSS_RATE"].value -
          this.g["CPOD_GROSS_RATE"].value / this.g["CPOD_DISC_PER"].value
      );
    }
    this.g["CPOD_AMT"].setValue(
      this.g["CPOD_RATE"].value * this.g["CPOD_ORD_QTY"].value
    );
  }
  save() {
    this.submitted = true;
    if (this.salesOrderMasterForm.valid) {
      this.submitted = false;
      this.newOrder ? (this.process = "Insert") : (this.process = "Update");
      this.confirmationService.confirm({
        message: "Are you sure that you want to save?",
        header: "Save Confirmation",
        icon: "fas fa-save",
        accept: () => {
          this.f["CPOM_WORK_ODR_NO"].enable();
          this.service
            .INSERT_UPSERT_CUSTOMER_PO(
              this.salesOrderMasterForm.value,
              this.salesOrderDetails,
              this.process
            )
            .subscribe(
              (data) => {
                this.cancel();
                this.editInsert = false;
                this.getSalesOrderTableResponse();
                this.messageService.add({
                  key: "t1",
                  severity: "success",
                  summary: "Success",
                  detail: this.process.toUpperCase() + " Successfully",
                });
              },
              (error: HttpErrorResponse) => {
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
        detail: "Please Fill All required fields",
      });
      return;
    }
  }
  resetForm() {
    this.salesOrderMasterForm.reset();
    this.salesOrderDetailTable = [];
    this.salesOrderDetails = [];
    this.salesOrderDetailForm.reset();
  }
  cancel() {
    this.commonService
      .setResetModify(
        "CUSTPO_MASTER",
        "MODIFY",
        "CPOM_CODE",
        this.editingPKCODE,
        0,
        "setLock"
      )
      .subscribe((data) => {
        this.submitted = false;
        this.displayBasic = false;
        this.resetForm();
      });
  }
}
