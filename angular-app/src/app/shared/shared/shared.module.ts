import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavComponent } from "../../nav/nav.component";
import { NavSalesComponent } from "../../sales/nav-sales/nav-sales.component";
import { NavStoreComponent } from "src/app/store/nav-store/nav-store.component";
import { NavMastersComponent } from "src/app/masters/nav-masters/nav-masters.component";
import { NavAdministratorComponent } from "src/app/administrator/nav-administrator/nav-administrator.component";

@NgModule({
  declarations: [
    NavComponent,
    NavSalesComponent,
    NavStoreComponent,
    NavMastersComponent,
    NavAdministratorComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavComponent,
    NavSalesComponent,
    NavStoreComponent,
    NavMastersComponent,
    NavAdministratorComponent,
  ],
})
export class SharedModule {}
