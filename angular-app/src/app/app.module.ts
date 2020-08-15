import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'primeng/card';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BomComponent } from './bom/bom.component';
import { BomserviceService } from './bom/bom_service/bomservice.service';
import { BomMasterResolverService } from './_resolvers/bom-master-resolver.service';
import { ItemMasterResolverService } from './_resolvers/item-master-resolver.service';
import { UnitResolverService } from './_resolvers/unit-resolver.service';


import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FormDirective } from './form.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BomComponent,
    FormDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers: [BomserviceService, BomMasterResolverService, ItemMasterResolverService, UnitResolverService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
