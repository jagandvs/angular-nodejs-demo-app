import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITEM_MASTER } from 'src/app/model/ITEM_MASTER';
import { deleteTable, httpOptions, insertItemMaster, TableResponse, updateItemMaster } from 'src/app/_helpers/navigation-urls';

@Injectable({
  providedIn: 'root'
})
export class SalesMastersService {

  constructor(
    private http: HttpClient
  ) { }

  getItemMasterTableResponse(): Observable<ITEM_MASTER[]> {
    let body = { fieldNames: 'I_CODE,I_CODENO,I_NAME,I_UOM_NAME,I_CAT_NAME,ITEM_MASTER.I_CAT_CODE,I_SCAT_CODE', tableNames: 'ITEM_MASTER,ITEM_UNIT_MASTER,ITEM_CATEGORY_MASTER', condition: 'ITEM_MASTER.I_UOM_CODE=ITEM_UNIT_MASTER.I_UOM_CODE AND ITEM_MASTER.I_CAT_CODE=ITEM_CATEGORY_MASTER.I_CAT_CODE AND ITEM_MASTER.ES_DELETE=0 AND ITEM_UNIT_MASTER.ES_DELETE=0 AND ITEM_CATEGORY_MASTER.ES_DELETE=0' }
    return this.http.post<ITEM_MASTER[]>(TableResponse, body, httpOptions)
  }
  getItemCat(): Observable<any[]> {
    let body = { fieldNames: 'I_CAT_CODE,I_CAT_NAME', tableNames: 'ITEM_CATEGORY_MASTER', condition: 'ES_DELETE=0' }
    return this.http.post<any[]>(TableResponse, body, httpOptions)
  }
  getItemSubCat(): Observable<any[]> {
    let body = { fieldNames: 'SCAT_CODE,SCAT_CAT_CODE,SCAT_DESC', tableNames: 'ITEM_SUBCATEGORY_MASTER', condition: 'ES_DELETE=0' }
    return this.http.post<any[]>(TableResponse, body, httpOptions)
  }
  // tslint:disable-next-line: max-line-length
  insertItemMaster(I_CODENO: string, I_NAME: string, I_SCAT_NAME: number, I_CAT_NAME: number, I_DRAW_NO: string, I_SPECIFICATION: string ): Observable<any> {
    let body = { I_CODENO: I_CODENO, I_NAME: I_NAME, I_SCAT_NAME: I_SCAT_NAME, I_CAT_NAME: I_CAT_NAME , I_DRAW_NO: I_DRAW_NO , I_SPECIFICATION: I_SPECIFICATION }
    return this.http.post<any>(insertItemMaster, body, httpOptions)
  }
  updateItemMaster(I_CODENO: string, I_NAME: string, I_SCAT_NAME: number, I_CAT_NAME: number, I_CODE: number): Observable<any> {
    let body = { I_CODENO: I_CODENO, I_NAME: I_NAME, I_SCAT_NAME: I_SCAT_NAME, I_CAT_NAME: I_CAT_NAME, I_CODE: I_CODE }
    return this.http.put<any>(updateItemMaster, body, httpOptions)
  }
  deleteTable(tableName: string, condition: string): Observable<any> {
    let body = { tableName: tableName, condition: condition }
    return this.http.put(deleteTable, body, httpOptions)
  }
}