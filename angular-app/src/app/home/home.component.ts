import { Component, OnInit } from "@angular/core";
import { VirtualTimeScheduler } from "rxjs";
import { Router } from "@angular/router";
import { AuthenticationService } from "../_services/authentication.service";
declare var jQuery: any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  user: String;
  constructor(
    public router: Router,
    private authenticationService: AuthenticationService
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
