import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { USER_MASTER } from "../model/USER_MASTER";
import { COMPANY_MASTER } from "../model/COMPANY_MASTER";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
  getCompanyDetails,
  httpOptions,
  login,
  TableResponse,
} from "../_helpers/navigation-urls";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<USER_MASTER>;
  public currentUser: Observable<USER_MASTER>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<USER_MASTER>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): USER_MASTER {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string, cm_code: string) {
    return this.http
      .post<any>(login, {
        username: username,
        password: password,
        cm_code: cm_code,
      })
      .pipe(
        map((user) => {
          localStorage.setItem("currentUser", JSON.stringify(user));
          sessionStorage.setItem("token", user.token);
          localStorage.setItem(
            "companyDetails",
            JSON.stringify(user.companyDetails)
          );
          this.currentUserSubject.next(user.user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.clear();
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
  getCompanyDetails(): Observable<COMPANY_MASTER[]> {
    let body = { fieldNames: "*", tableNames: "COMPANY_MASTER", condition: "" };
    return this.http.post<COMPANY_MASTER[]>(TableResponse, body, httpOptions);
  }

  isLoggedIn() {
    return (
      sessionStorage.getItem("token") ===
      JSON.parse(localStorage.getItem("currentUser")).token
    );
  }
}
