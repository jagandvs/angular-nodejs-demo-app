import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";
import { USER_MASTER } from "../model/USER_MASTER";
import { CommonServicesService } from "../_services/common-services.service";
import { COMPANY_MASTER } from "../model/COMPANY_MASTER";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // Declare all variables using in this component

  public loginForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string = "";
  public errorMessage: string = "";
  public currentUser: USER_MASTER;
  public companyMasterDetails: COMPANY_MASTER[];
  public companyNames: COMPANY_MASTER[];
  public currentFinacialYear: number;

  constructor(
    // initialize of all services in this constructor parameters
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private commonService: CommonServicesService
  ) {}

  ngOnInit(): void {
    // get all the variable to load before the component loads

    // Get the company details
    this.commonService
      .getTableResponse("*", "COMPANY_MASTER", "CM_ACTIVE_IND=1")
      .subscribe((data) => {
        this.companyMasterDetails = data;
        this.companyNames = [
          ...new Map(
            this.companyMasterDetails.map((item, key) => [item[key], item])
          ).values(),
        ];
        let todayDate = new Date();
        this.companyMasterDetails.filter((detail) => {
          if (
            new Date(detail.CM_OPENING_DATE).getTime() < todayDate.getTime() &&
            new Date(detail.CM_CLOSING_DATE).getTime() > todayDate.getTime()
          ) {
            console.log(detail.CM_CODE);
            this.f.financialYear.setValue(detail.CM_CODE);
          }
        });
      });
    // Login form initialization
    this.loginForm = this.formBuilder.group({
      companyName: [1, Validators.required],
      financialYear: [0, Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  // Get Control Over the form
  get f() {
    return this.loginForm.controls;
  }

  //  Handle form submission
  onSubmit() {
    this.submitted = true;
    this.errorMessage = "";
    if (this.loginForm.invalid) {
      this.errorMessage = "Please fill all details";
      return;
    }
    this.authenticationService
      .login(
        this.f.username.value,
        this.f.password.value,
        this.f.financialYear.value
      )
      .subscribe(
        (data) => {
          if (data) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.errorMessage = "Invalid username/password";
          }
        },
        (error) => {
          this.errorMessage = error.error.error;
          this.loading = false;
        }
      );
  }
}
