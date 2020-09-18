import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SalesBillOfMaterialComponent } from './sales-bill-of-material/sales-bill-of-material.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SalesTransactionsService } from './sales-transactions.service';
import { BomTableResolverService } from '../../_resolvers/bomTable-resolver.service';
import { ItemTableResolverService } from '../../_resolvers/itemTable-resolver.service';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { PrintInvoiceComponent } from './sales-invoice/print-invoice/print-invoice.component'
const routes: Routes = [
  { path: 'bom', component: SalesBillOfMaterialComponent, resolve: { bomTable: BomTableResolverService, itemTable: ItemTableResolverService } },
  { path: 'invoice', component: SalesInvoiceComponent }

];


@NgModule({
  declarations: [SalesBillOfMaterialComponent, SalesInvoiceComponent, PrintInvoiceComponent],
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
    RouterModule.forChild(routes)
  ],
  providers: [SalesTransactionsService, BomTableResolverService, ItemTableResolverService]
})
export class SalesTransactionsModule { }
