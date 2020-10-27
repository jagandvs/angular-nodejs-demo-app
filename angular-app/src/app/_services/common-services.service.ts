import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpOptions, TableResponse } from '../_helpers/navigation-urls';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  constructor(
    private http: HttpClient
  ) { }

  getTableResponse(fieldNames: string, tableNames: string, condition: string): Observable<any> {
    let body = { fieldNames: fieldNames, tableNames: tableNames, condition: condition };
    return this.http.post(TableResponse, body, httpOptions)
  }
}