import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/_services/authentication.service";
declare var jQuery: any;
@Component({
  selector: "app-nav-store",
  templateUrl: "./nav-store.component.html",
  styleUrls: ["./nav-store.component.css"],
})
export class NavStoreComponent implements OnInit {
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
