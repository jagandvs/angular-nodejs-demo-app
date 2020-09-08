import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BomComponent } from './bom/bom.component';
import { ItemMasterResolverService } from './_resolvers/item-master-resolver.service';
import { BomMasterResolverService } from './_resolvers/bom-master-resolver.service';
import { UnitResolverService } from './_resolvers/unit-resolver.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  // { path: 'BillOfMaterial', component: BomComponent, resolve: { item_master: ItemMasterResolverService, bom_master: BomMasterResolverService, unit_master: UnitResolverService } },
  { path: 'sales', loadChildren: () => import('./sales/sales.module').then(mod => mod.SalesModule), canActivate: [AuthGuard] },
  { path: 'store', loadChildren: () => import('./store/store.module').then(mod => mod.StoreModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
