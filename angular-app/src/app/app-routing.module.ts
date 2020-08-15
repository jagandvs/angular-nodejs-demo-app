import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BomComponent } from './bom/bom.component';
import { ItemMasterResolverService } from './_resolvers/item-master-resolver.service';
import { BomMasterResolverService } from './_resolvers/bom-master-resolver.service';
import { UnitResolverService } from './_resolvers/unit-resolver.service';


const routes: Routes = [
  { path: '', component: BomComponent },
  { path: 'BillOfMaterial', component: BomComponent, resolve: { item_master: ItemMasterResolverService, bom_master: BomMasterResolverService, unit_master: UnitResolverService } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
