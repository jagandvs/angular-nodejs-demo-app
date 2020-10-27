import { Injectable } from '@angular/core';
import { BomTableResponse } from '../../model/BomTableResponse';
import { ItemTableResponse } from '../../model/ItemTableResponse';
import { SalesOrderTableResponse } from '../../model/SalesOrderTableResponse';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { deleteTable, getInvoiceDetails, httpOptions, postBomDetail, postBomMaster, TableResponse, updateBomMaster } from '../../_helpers/navigation-urls'
import { Observable } from 'rxjs';
import { BOM_MASTER } from 'src/app/model/BOM_MASTER';
import { BOM_DETAIL } from 'src/app/model/BOM_DETAIL';
import { SalesOrderTypeMaster } from 'src/app/model/SalesOrderTypeMaster';
import { PartyMaster } from 'src/app/model/PartyMaster';


@Injectable({
  providedIn: 'root'
})
export class SalesTransactionsService {
  constructor(
    private http: HttpClient
  ) { }


  getPartyMasterTableResponse(): Observable<PartyMaster[]> {
    let body = { fieldNames: 'P_CODE,P_NAME', tableNames: 'PARTY_MASTER', condition: 'ES_DELETE=0' }
    return this.http.post<PartyMaster[]>(TableResponse, body, httpOptions)
  }

  getSalesOrderTypeTableResponse(): Observable<SalesOrderTypeMaster[]> {
    let body = { fieldNames: 'SO_T_CODE,SO_T_DESC', tableNames: 'SO_TYPE_MASTER', condition: 'ES_DELETE=0' }
    return this.http.post<SalesOrderTypeMaster[]>(TableResponse, body, httpOptions)
  }

  getSalesOrderTableResponse(): Observable<SalesOrderTableResponse[]> {
    let body = { fieldNames: 'CPOM_CODE,CPOM_NO,CPOM_PONO,P_NAME,CPOM_DATE', tableNames: 'CUSTPO_MASTER,PARTY_MASTER', condition: 'CPOM_P_CODE=P_CODE and CUSTPO_MASTER.ES_DELETE=0 and PARTY_MASTER.ES_DELETE=0' }
    return this.http.post<SalesOrderTableResponse[]>(TableResponse, body, httpOptions)
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
