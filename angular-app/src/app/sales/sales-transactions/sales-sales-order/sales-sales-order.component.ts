import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService, SelectItem } from 'primeng/api';
import { SalesOrderTableResponse } from 'src/app/model/SalesOrderTableResponse';
import { SalesTransactionsService } from '../sales-transactions.service';
import { ItemTableResponse } from 'src/app/model/ItemTableResponse';
import { CustomerPODetail } from 'src/app/model/CustomerPODetail';
import { CustomerPOMaster } from 'src/app/model/CustomerPOMaster';
import { MATERIAL_TABLE } from 'src/app/model/MATERIAL_TABLE';
import { CommonServicesService } from 'src/app/_services/common-services.service';

@Component({
  selector: 'app-sales-sales-order',
  templateUrl: './sales-sales-order.component.html',
  styleUrls: ['./sales-sales-order.component.css']
})
export class SalesSalesOrderComponent implements OnInit {
  SalesOrderTableResponse: SalesOrderTableResponse[];
  itemTableResponse: ItemTableResponse[] = [];
  loading: boolean;
  customerpoDetail: CustomerPODetail[];
  customerpoMaster: CustomerPOMaster;
  displayBasic: boolean;
  newItem: boolean;
  submitted: boolean;
  CPOM_CODE: number;
  SOTypeList: SelectItem[] = [];
  CustomerMasterList: SelectItem[] = [];
  materialForm: FormGroup;
  SalesOrderForm: FormGroup;
  material_table: MATERIAL_TABLE[] = [];

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
    private fb: FormBuilder,
    private commonService: CommonServicesService
  ) { }
  //#region Intialization of all controls and dropdown values

  ngOnInit(): void {


    this.commonService.getTableResponse('I_CODE,I_UOM_NAME,I_CODENO,I_NAME', 'ITEM_UNIT_MASTER,ITEM_MASTER', 'ITEM_MASTER.I_UOM_CODE=ITEM_UNIT_MASTER.I_UOM_CODE AND ITEM_MASTER.ES_DELETE=0 AND ITEM_UNIT_MASTER.ES_DELETE=0').subscribe(
      data => {
        this.itemTableResponse = data;
        for (let items of this.itemTableResponse) {
          this.I_CODENO.push({ label: items.I_CODENO, value: items.I_CODE });
          this.I_NAME.push({ label: items.I_NAME, value: items.I_CODE });
          this.I_UOM_NAME.push({ label: items.I_UOM_NAME, value: items.I_CODE });
        }
      });

    this.service.getSalesOrderTableResponse().subscribe(

      data => {
        this.SalesOrderTableResponse = data;
        console.log(this.SalesOrderTableResponse);
      }

    );



    this.service.getSalesOrderTypeTableResponse().subscribe(
      data => {
        for (let item of data) {
          this.SOTypeList.push({ label: item.SO_T_DESC, value: item.SO_T_CODE })
        }
      }
    );

    this.service.getPartyMasterTableResponse().subscribe(
      data => {
        for (let item of data) {
          this.CustomerMasterList.push({ label: item.P_NAME, value: item.P_CODE })
        }
      }
    );
    this.SalesOrderForm = this.fb.group({

      CPOM_TYPE: ['', Validators.required],
      CPOM_DOC_NO: [''],
      CPOM_P_CODE: ['', Validators.required],
      CPOM_PONO: ['', Validators.required]

    });

    this.materialForm = this.fb.group({
      I_CODENO: ['', Validators.required],
      I_UOM_NAME: [{ value: '', disabled: true }, Validators.required],
      I_NAME: ['', Validators.required],
      VQTY: ['', Validators.required],
      SQTY: ['']
    });


  }

  //#endregion


  get f() {
    return this.SalesOrderForm.controls;
  }
  get m() {
    return this.materialForm.controls;
  }

  //#region User Defined Functions
  addNewItem() {
    this.customerpoDetail = [];
    this.displayBasic = true;
    this.submitted = false;
    this.newItem = true;
  }
  //#endregion

  // export to excel
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.SalesOrderTableResponse);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "SalesOrderTable");
    });
  }
  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

  // End of Export to excel

}
