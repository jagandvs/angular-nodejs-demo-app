import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
  httpOptions,
  INSERT_UPSERT_CUSTOMER_PO,
  INSERT_UPSERT_CUSTOMER_PO_DETAIL,
  Item_SelectedIndexChanged,
  UPSERT_CUSTOMER_PO,
} from "../../_helpers/navigation-urls";
import { Observable } from "rxjs";

import { CM_ID } from "src/app/_helpers/variables";
import { SalesOrderTableResponse } from "./model/salesOrderTableResponse";
import { CommonServicesService } from "src/app/_services/common-services.service";

@Injectable({
  providedIn: "root",
})
export class SalesTransactionsService {
  constructor(
    private http: HttpClient,
    private commonService: CommonServicesService
  ) {}

  getSalesOrderTableResponse(): Observable<any[]> {
    return this.http
      .post<any[]>(
        UPSERT_CUSTOMER_PO,
        {
          PROCESS: "selectAll",
          CPOM_CM_COMP_ID: CM_ID,
        },
        this.commonService.logger(
          "Sales Order Table",
          "select All",
          "Sales Order",
          "",
          ""
        )
      )
      .pipe(
        map((response) => {
          const setArray = new Set();
          const filteredArr = response.filter((el) => {
            const duplicate = setArray.has(el.CPOM_CODE);
            setArray.add(el.CPOM_CODE);
            return !duplicate;
          });
          return filteredArr;
        })
      );
  }
  getSalesOrderMasterAndDetail(CPOM_CODE, PROCESS) {
    return this.http.post<any[]>(
      UPSERT_CUSTOMER_PO,
      {
        PROCESS: PROCESS,
        CPOM_CODE: CPOM_CODE,
        CPOM_CM_COMP_ID: CM_ID,
      },
      this.commonService.logger(
        "Sales Order Master",
        "select Master and Detail",
        "Sales Order",
        "",
        ""
      )
    );
  }
  Item_SelectedIndexChanged(I_CODE): Observable<any> {
    return this.http.get<any>(
      Item_SelectedIndexChanged + "?I_CODE=" + I_CODE,
      this.commonService.logger(
        "Sales Order Table",
        "index changer",
        "Sales Order",
        "",
        ""
      )
    );
  }
  INSERT_UPSERT_CUSTOMER_PO(masterForm, detailForm, process) {
    let body = [masterForm, detailForm, { PROCESS: process }];
    console.log(body);
    return this.http.post<any>(
      INSERT_UPSERT_CUSTOMER_PO,
      body,
      this.commonService.logger(
        "Sales Order Table",
        process,
        "Sales Order",
        "",
        ""
      )
    );
  }
}
