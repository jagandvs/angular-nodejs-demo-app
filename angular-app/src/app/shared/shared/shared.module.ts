import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from '../../nav/nav.component';
import { NavSalesComponent } from '../../sales/nav-sales/nav-sales.component';
import { NavStoreComponent } from 'src/app/store/nav-store/nav-store.component';
import { NavMastersComponent } from 'src/app/masters/nav-masters/nav-masters.component';


@NgModule({
  declarations: [NavComponent, NavSalesComponent, NavStoreComponent, NavMastersComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, NavSalesComponent, NavStoreComponent, NavMastersComponent]
})
export class SharedModule { }
