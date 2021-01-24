import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, Router, RouterModule } from "@angular/router";
import { SalesItemMasterComponent } from "./sales-item-master/sales-item-master.component";
import { SharedModule } from "../../shared/shared/shared.module";
import { SalesMastersService } from "./sales-masters.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { DropdownModule } from "primeng/dropdown";
import { ToastModule } from "primeng/toast";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { CommonServicesService } from "../../_services/common-services.service";
import { SalesItemUnitMasterComponent } from "./sales-item-unit-master/sales-item-unit-master.component";
import { JwtInterceptor } from "src/app/_helpers/JwtInterceptor";
const routes: Routes = [
  { path: "itemMaster", component: SalesItemMasterComponent },
  { path: "itemUnitMaster", component: SalesItemUnitMasterComponent },
];

@NgModule({
  declarations: [SalesItemMasterComponent, SalesItemUnitMasterComponent],
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
    RouterModule.forChild(routes),
  ],
  providers: [
    SalesMastersService,
    CommonServicesService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class SalesMastersModule {}
