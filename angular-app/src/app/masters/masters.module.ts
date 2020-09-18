import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MastersBomMasterComponent } from './masters-bom-master/masters-bom-master.component'
import { MastersHsnMasterComponent } from './masters-hsn-master/masters-hsn-master.component'
import { MastersItemMasterComponent } from './masters-item-master/masters-item-master.component'
import { MastersTallyMasterComponent } from './masters-tally-master/masters-tally-master.component'

const routes: Routes = [
  { path: 'bomMaster', component: MastersBomMasterComponent },
  { path: 'hsnMaster', component: MastersHsnMasterComponent },
  { path: 'itemMaster', component: MastersItemMasterComponent },
  { path: 'tallyMaster', component: MastersTallyMasterComponent },
];


@NgModule({
  declarations: [
    MastersBomMasterComponent,
    MastersHsnMasterComponent,
    MastersItemMasterComponent,
    MastersTallyMasterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MastersModule { }
