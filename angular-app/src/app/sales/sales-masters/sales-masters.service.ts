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
} from "src/app/_helpers/navigation-urls";
import { itemMasterTableRequest } from "../model/itemMasterTableRequest";

@Injectable({
  providedIn: "root",
})
export class SalesMastersService {
  constructor(private http: HttpClient) {}
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
}
