import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { USER_MASTER } from '../model/USER_MASTER'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  login(username: string, password: string) {

    return this.http.post<USER_MASTER>(this.url + "users/authenticate", { username: username, password: password })
  }

  logout() {

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

}
