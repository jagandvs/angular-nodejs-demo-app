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
    private http: HttpClient,

  ) { }
  insertItemMaster(I_CODENO: string, I_NAME: string, I_SCAT_NAME: number, I_CAT_NAME: number, I_DRAW_NO: string, I_SPECIFICATION: string): Observable<any> {
    let body = { I_CODENO: I_CODENO, I_NAME: I_NAME, I_SCAT_NAME: I_SCAT_NAME, I_CAT_NAME: I_CAT_NAME, I_DRAW_NO: I_DRAW_NO, I_SPECIFICATION: I_SPECIFICATION }
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