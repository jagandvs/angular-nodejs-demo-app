import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
declare var jQuery: any;

@Component({
  selector: "app-administrator",
  templateUrl: "./administrator.component.html",
  styleUrls: ["./administrator.component.css"],
})
export class AdministratorComponent implements OnInit {
  constructor(public router: Router) {}

  user: string;
  ngOnInit(): void {}
}
