import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/_services/authentication.service";
declare var jQuery: any;
@Component({
  selector: "app-nav-sales",
  templateUrl: "./nav-sales.component.html",
  styleUrls: ["./nav-sales.component.css"],
})
export class NavSalesComponent implements OnInit {
  user: string;
  constructor(
    public router: Router,
    public authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $("#sidebarCollapse").on("click", function () {
          $("#sidebar").toggleClass("active");
        });
      });
    })(jQuery);
    this.user = this.authenticationService.currentUserValue.UM_USERNAME;
  }
}
