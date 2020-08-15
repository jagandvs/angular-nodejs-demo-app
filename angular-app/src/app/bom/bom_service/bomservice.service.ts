import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BOM_MASTER } from '../../model/BOM_MASTER';
import { ITEM_MASTER } from 'src/app/model/ITEM_MASTER';
import { ITEM_UNIT_MASTER } from 'src/app/model/ITEM_UNIT_MASTER';
import { BOM_DETAIL } from 'src/app/model/BOM_DETAIL';

@Injectable({
  providedIn: 'root'
})
export class BomserviceService {
  url: string = "/api/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient
  ) { }

  getBomMaster(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "getBomMaster");
  }
  getItemMaster(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "getItemMaster")
  }
  getUnitMaster(): Observable<ITEM_UNIT_MASTER[]> {
    return this.http.get<any[]>(this.url + "getUnitMaster")

  }

  saveBomMaster(bom_master: BOM_MASTER): Observable<any> {

    return this.http.post<BOM_MASTER>(this.url + "postBomMaster", JSON.stringify(bom_master), this.httpOptions);
  }
  saveBomDetail(bom_detail: BOM_DETAIL[]): Observable<any> {
    return this.http.post<BOM_DETAIL[]>(this.url + 'postBomDetail', JSON.stringify(bom_detail), this.httpOptions);
  }
  deleteBomTable(bm_code: number): Observable<string> {
    return this.http.put<string>(this.url + 'deleteBomTable?bm_code=' + bm_code, this.httpOptions)
  }
  getBomDetailTable(bd_bm_code: number): Observable<BOM_DETAIL[]> {
    return this.http.get<BOM_DETAIL[]>(this.url + 'getBomDetailTable?bd_bm_code=' + bd_bm_code)
  }


}
