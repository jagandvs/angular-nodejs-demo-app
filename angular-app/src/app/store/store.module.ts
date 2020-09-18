import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavStoreComponent } from './nav-store/nav-store.component'
import { StoreMastersComponent } from './store-masters/store-masters.component';
import { StoreReportsComponent } from './store-reports/store-reports.component';
import { StoreTransactionComponent } from './store-transaction/store-transaction.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';
import { StoreComponent } from './store.component';


const routes: Routes = [
  { path: 'masters', component: StoreMastersComponent },
  { path: 'reports', component: StoreReportsComponent },
  { path: 'transaction', component: StoreTransactionComponent },
  { path: '', component: StoreComponent }
];


@NgModule({
  declarations: [
    StoreMastersComponent,
    StoreReportsComponent,
    StoreTransactionComponent,
    StoreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]

})
export class StoreModule { }
