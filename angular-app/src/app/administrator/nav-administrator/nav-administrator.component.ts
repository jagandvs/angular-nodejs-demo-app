import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var jQuery: any;
@Component({
  selector: "app-nav-administrator",
  templateUrl: "./nav-administrator.component.html",
  styleUrls: ["./nav-administrator.component.css"],
})
export class NavAdministratorComponent implements OnInit {
  constructor(public router: Router) {}

  user: string;

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $("#sidebarCollapse").on("click", function () {
          $("#sidebar").toggleClass("active");
        });
      });
    })(jQuery);
    this.user = localStorage.getItem("username");
  }
}
