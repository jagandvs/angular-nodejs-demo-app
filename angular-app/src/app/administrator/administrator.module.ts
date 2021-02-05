import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, Router, RouterModule } from "@angular/router";
import { AdministratorComponent } from "./administrator.component";
import { UserRightsComponent } from "./user-rights/user-rights.component";
import { NavAdministratorComponent } from "./nav-administrator/nav-administrator.component";
import { SharedModule } from "../shared/shared/shared.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { AdministratorService } from "./administrator.service";
import { ErrorInterceptor } from "../_helpers/error.interceptor";
import { JwtInterceptor } from "../_helpers/JwtInterceptor";
import { CheckboxModule } from "primeng/checkbox";
import { NgxPaginationModule } from "ngx-pagination";

const routes: Routes = [
  { path: "", component: AdministratorComponent },
  { path: "userRights", component: UserRightsComponent },
];

@NgModule({
  declarations: [UserRightsComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule,
    CheckboxModule,
    NgxPaginationModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    AdministratorService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class AdministratorModule {}
