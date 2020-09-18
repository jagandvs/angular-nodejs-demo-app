import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import { FormDirective } from './form.directive';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './_services/authentication.service';
import { FooterComponent } from './footer/footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from './shared/shared/shared.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { UtilityComponent } from './utility/utility.component';
import { GstComponent } from './gst/gst.component';
import { MastersComponent } from './masters/masters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormDirective,
    LoginComponent,
    FooterComponent,
    LogoutComponent,
    PurchaseComponent,
    UtilityComponent,
    GstComponent,
    MastersComponent

  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [MessageService, ConfirmationService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
