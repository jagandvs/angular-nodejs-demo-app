import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesMastersComponent } from './sales-masters/sales-masters.component';
import { SalesTransactionsComponent } from './sales-transactions/sales-transactions.component';
import { SalesReportsComponent } from './sales-reports/sales-reports.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { NavSalesComponent } from './nav-sales/nav-sales.component'
const routes: Routes = [
  { path: 'masters', component: SalesMastersComponent },
  { path: 'reports', component: SalesReportsComponent },
  { path: 'transaction', component: SalesTransactionsComponent },

  { path: '', redirectTo: 'masters', pathMatch: 'full' }
];

@NgModule({
  declarations: [SalesMastersComponent, SalesTransactionsComponent, SalesReportsComponent, NavSalesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SalesModule { }
