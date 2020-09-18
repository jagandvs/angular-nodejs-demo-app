import { Injectable } from '@angular/core';
import { BomTableResponse } from '../../model/BomTableResponse';
import { ItemTableResponse } from '../../model/ItemTableResponse';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { deleteTable, getInvoiceDetails, httpOptions, postBomDetail, postBomMaster, TableResponse, updateBomMaster } from '../../_helpers/navigation-urls'
import { Observable } from 'rxjs';
import { BOM_MASTER } from 'src/app/model/BOM_MASTER';
import { BOM_DETAIL } from 'src/app/model/BOM_DETAIL';

@Injectable({
  providedIn: 'root'
})
export class SalesTransactionsService {
  constructor(
    private http: HttpClient
  ) { }

  getBomTableResponse(): Observable<BomTableResponse[]> {
    let body = { fieldNames: 'BM_CODE,BM_I_CODE,I_CODENO,I_NAME', tableNames: 'BOM_MASTER,ITEM_MASTER', condition: 'BM_I_CODE=I_CODE AND BOM_MASTER.ES_DELETE=0 AND ITEM_MASTER.ES_DELETE=0' }
    return this.http.post<BomTableResponse[]>(TableResponse, body, httpOptions)
  }
  getItemTableResponse(): Observable<ItemTableResponse[]> {
    let body = { fieldNames: 'I_CODE,I_UOM_NAME,I_CODENO,I_NAME', tableNames: 'ITEM_UNIT_MASTER,ITEM_MASTER', condition: 'ITEM_MASTER.I_UOM_CODE=ITEM_UNIT_MASTER.I_UOM_CODE AND ITEM_MASTER.ES_DELETE=0 AND ITEM_UNIT_MASTER.ES_DELETE=0' }
    return this.http.post<ItemTableResponse[]>(TableResponse, body, httpOptions)
  }
  deleteTable(tableName: string, condition: string): Observable<any> {
    let body = { tableName: tableName, condition: condition }
    return this.http.put(deleteTable, body, httpOptions)
  }
  saveBomMaster(bom_master: BOM_MASTER): Observable<any> {

    return this.http.post<BOM_MASTER>(postBomMaster, JSON.stringify(bom_master), httpOptions);
  }
  saveBomDetail(bom_detail: BOM_DETAIL[]): Observable<any> {
    return this.http.post<BOM_DETAIL[]>(postBomDetail, JSON.stringify(bom_detail), httpOptions);
  }
  getBomDetailTable(bd_bm_code: number): Observable<BOM_DETAIL[]> {
    let body = { fieldNames: '*', tableNames: 'BOM_DETAIL', condition: 'BD_BM_CODE=' + bd_bm_code + 'AND ES_DELETE=0' }
    return this.http.post<BOM_DETAIL[]>(TableResponse, body, httpOptions)
  }
  updateBomMaster(bom_master: BOM_MASTER, BM_CODE: number): Observable<any> {

    return this.http.put<any>(updateBomMaster + '?bm_code=' + BM_CODE, JSON.stringify(bom_master), httpOptions)
  }
  getInvoiceDetails(bm_code: number): Observable<any> {
    return this.http.get<any>(getInvoiceDetails + '?bm_code=' + bm_code)

  }

}
