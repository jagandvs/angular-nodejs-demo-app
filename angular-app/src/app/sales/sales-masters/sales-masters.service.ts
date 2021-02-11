import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ITEM_MASTER } from "src/app/model/ITEM_MASTER";
import {
  deleteTable,
  httpOptions,
  insertItemMaster,
  TableResponse,
  updateItemMaster,
  UPSERT_ITEM_UNIT_MASTER,
} from "src/app/_helpers/navigation-urls";
import { CM_ID } from "src/app/_helpers/variables";
import { CommonServicesService } from "src/app/_services/common-services.service";
import { itemMasterTableRequest } from "../model/itemMasterTableRequest";

@Injectable({
  providedIn: "root",
})
export class SalesMastersService {
  constructor(
    private http: HttpClient,
    private commonService: CommonServicesService
  ) {}
  insertItemMaster(
    itemMasterTableRequest: itemMasterTableRequest
  ): Observable<any> {
    return this.http.post<any>(
      insertItemMaster,
      itemMasterTableRequest,
      httpOptions
    );
  }
  updateItemMaster(
    itemMasterTableRequest: itemMasterTableRequest,
    I_CODE: number
  ): Observable<any> {
    return this.http.put<any>(
      `${updateItemMaster}/${I_CODE}`,
      itemMasterTableRequest,
      httpOptions
    );
  }
  deleteTable(tableName: string, condition: string): Observable<any> {
    let body = { tableName: tableName, condition: condition };
    return this.http.put(deleteTable, body, httpOptions);
  }

  // ITEM UNIT MASTER
  getItemUnitMasterTableResponse(): Observable<any[]> {
    let body = { I_UOM_CM_COMP_ID: CM_ID, PROCESS: "select" };
    return this.http.post<any[]>(
      UPSERT_ITEM_UNIT_MASTER,
      body,
      this.commonService.logger(
        "Item Unit Master",
        "select",
        "Item Unit Master",
        "",
        ""
      )
    );
  }
  CRUDItemUnitMaster(
    I_UOM_CODE: number,
    I_UOM_NAME: string,
    I_UOM_DESC: string,
    ES_DELETE: boolean,
    PROCESS: string
  ): Observable<any> {
    if (PROCESS == "update") {
      let body = {
        I_UOM_CODE: I_UOM_CODE,
        I_UOM_CM_COMP_ID: CM_ID,
        I_UOM_NAME: I_UOM_NAME,
        I_UOM_DESC: I_UOM_DESC,
        PROCESS: PROCESS,
      };
      return this.http.post<any>(
        UPSERT_ITEM_UNIT_MASTER,
        body,
        this.commonService.logger(
          "Item Unit Master",
          "update",
          "Item Unit Master",
          "",
          ""
        )
      );
    } else if (PROCESS == "insert") {
      let body = {
        I_UOM_CM_COMP_ID: CM_ID,
        I_UOM_NAME: I_UOM_NAME,
        I_UOM_DESC: I_UOM_DESC,
        PROCESS: PROCESS,
      };
      return this.http.post<any>(
        UPSERT_ITEM_UNIT_MASTER,
        body,
        this.commonService.logger(
          "Item Unit Master",
          "insert",
          "Item Unit Master",
          "",
          ""
        )
      );
    }
  }
}
