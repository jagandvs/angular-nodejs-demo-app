import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { USER_MASTER } from '../model/USER_MASTER'
import { COMPANY_MASTER } from '../model/COMPANY_MASTER'

import { environment } from 'src/environments/environment';
import { getCompanyDetails, httpOptions, login, TableResponse } from '../_helpers/navigation-urls'
import { core } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  login(username: string, password: string) {

    return this.http.post<USER_MASTER>(login, { username: username, password: password })
  }

  logout() {

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
  getCompanyDetails(): Observable<COMPANY_MASTER[]> {
    let body = { fieldNames: '*', tableNames: 'COMPANY_MASTER', condition: '' }
    return this.http.post<COMPANY_MASTER[]>(TableResponse, body, httpOptions);
  }

}
