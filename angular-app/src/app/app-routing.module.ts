import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { NavComponent } from './nav/nav.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  { path: 'sales', loadChildren: () => import('./sales/sales.module').then(mod => mod.SalesModule), canActivate: [AuthGuard] },
  { path: 'store', loadChildren: () => import('./store/store.module').then(mod => mod.StoreModule), canActivate: [AuthGuard] },
  { path: 'masters', loadChildren: () => import('./masters/masters.module').then(mod => mod.MastersModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
