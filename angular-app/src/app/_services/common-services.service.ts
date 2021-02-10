import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  getCompanyDetails,
  httpLogin,
  httpOptions,
  setResetModify,
  TableResponse,
} from "../_helpers/navigation-urls";
import {
  CM_CODE,
  CM_ID,
  CM_NAME,
  UM_CODE,
  UM_NAME,
} from "../_helpers/variables";
@Injectable({
  providedIn: "root",
})
export class CommonServicesService {
  constructor(private http: HttpClient) {}

  getTableResponse(
    fieldNames: string,
    tableNames: string,
    condition: string
  ): Observable<any> {
    let body = {
      fieldNames: fieldNames,
      tableNames: tableNames,
      condition: condition,
    };
    return this.http.post(TableResponse, body, httpLogin);
  }
  getCompanyDetails(
    fieldNames: string,
    tableNames: string,
    condition: string
  ): Observable<any> {
    let body = {
      fieldNames: fieldNames,
      tableNames: tableNames,
      condition: condition,
    };
    return this.http.post(getCompanyDetails, body, httpLogin);
  }

  logger(
    LG_SOURCE: string,
    LG_EVENT: string,
    LG_DOC_NO: string,
    LG_DOC_NAME: string,
    LG_DOC_CODE: any
  ) {
    const httpOptions = {
      headers: new HttpHeaders({
        LG_CM_CODE: CM_CODE,
        LG_CM_COMP_ID: CM_ID,
        LG_DATE: new Date().toISOString().replace(/T/, " ").replace(/\..+/, ""),
        LG_SOURCE: LG_SOURCE,
        LG_EVENT: LG_EVENT,
        LG_COMP_NAME: CM_NAME,
        LG_DOC_NO: LG_DOC_NO,
        LG_DOC_NAME: LG_DOC_NAME,
        LG_DOC_CODE: LG_DOC_CODE,
        LG_U_NAME: UM_NAME,
        LG_U_CODE: UM_CODE,
      }),
    };
    console.log(httpOptions);
    return httpOptions;
  }

  setResetModify(
    TableName: string,
    ModField: string,
    codeField: string,
    codeVal: number,
    MODIFY: number,
    process: string
  ) {
    let body = {
      TableName: TableName,
      ModField: ModField,
      codeField: codeField,
      codeVal: codeVal,
      MODIFY: MODIFY,
      process: process,
    };
    return this.http.post(setResetModify, body, httpOptions);
  }
}
