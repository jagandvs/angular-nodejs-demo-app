import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SalesMastersComponent } from "./sales-masters/sales-masters.component";
import { SalesTransactionsComponent } from "./sales-transactions/sales-transactions.component";
import { SalesReportsComponent } from "./sales-reports/sales-reports.component";
import { Routes, Router, RouterModule } from "@angular/router";
import { AuthGuard } from "../_guards/auth.guard";
import { SharedModule } from "../shared/shared/shared.module";
import { SalesComponent } from "./sales.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "../_helpers/JwtInterceptor";
const routes: Routes = [
  {
    path: "masters",
    loadChildren: () =>
      import("./sales-masters/sales-masters.module").then(
        (mod) => mod.SalesMastersModule
      ),
    canActivate: [AuthGuard],
  },
  { path: "reports", component: SalesReportsComponent },
  {
    path: "transaction",
    loadChildren: () =>
      import("./sales-transactions/sales-transactions.module").then(
        (mod) => mod.SalesTransactionsModule
      ),
    canActivate: [AuthGuard],
  },
  { path: "", component: SalesComponent },
];

@NgModule({
  declarations: [
    SalesMastersComponent,
    SalesTransactionsComponent,
    SalesReportsComponent,
    SalesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
})
export class SalesModule {}
