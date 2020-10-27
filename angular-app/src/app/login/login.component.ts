import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import { USER_MASTER } from '../model/USER_MASTER';
import { CommonServicesService } from '../_services/common-services.service';
import { COMPANY_MASTER } from '../model/COMPANY_MASTER';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage: string;
  currentUser: USER_MASTER;
  companyMasterDetails: COMPANY_MASTER[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private commonService: CommonServicesService
  ) { }

  ngOnInit(): void {
    this.commonService.getTableResponse('*', 'COMPANY_MASTER', 'CM_ACTIVE_IND=1').subscribe(
      data => {
        this.companyMasterDetails = data;
      }
    )
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.f.username.value, this.f.password.value)
    this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(
      data => {
        console.log(data);
        if (data) {

          this.currentUser = data
          localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
          localStorage.setItem('username', this.currentUser.UM_USERNAME);
          this.router.navigate([this.returnUrl]);
        } else {
          this.errorMessage = "Invalid username/password";
        }

      },
      (error) => {
        this.errorMessage = "Invalid username/password";
        this.loading = false;
        console.log(error)
      });

  }
}


