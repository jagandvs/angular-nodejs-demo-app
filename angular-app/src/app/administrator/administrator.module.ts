import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, Router, RouterModule } from "@angular/router";
import { AdministratorComponent } from "./administrator.component";
import { UserRightsComponent } from "./user-rights/user-rights.component";
import { NavAdministratorComponent } from "./nav-administrator/nav-administrator.component";
import { SharedModule } from "../shared/shared/shared.module";
const routes: Routes = [
  { path: "", component: AdministratorComponent },
  { path: "userRights", component: UserRightsComponent },
];

@NgModule({
  declarations: [UserRightsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AdministratorModule {}
