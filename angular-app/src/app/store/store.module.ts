import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavStoreComponent } from './nav-store/nav-store.component'
import { StoreMastersComponent } from './store-masters/store-masters.component';
import { StoreReportsComponent } from './store-reports/store-reports.component';
import { StoreTransactionComponent } from './store-transaction/store-transaction.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'masters', component: StoreMastersComponent },
  { path: 'reports', component: StoreReportsComponent },
  { path: 'transaction', component: StoreTransactionComponent },
  { path: '', redirectTo: 'masters', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    NavStoreComponent,
    StoreMastersComponent,
    StoreReportsComponent,
    StoreTransactionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})
export class StoreModule { }
