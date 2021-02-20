import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HomeComponent } from "./home/home.component";
import { MessageService, ConfirmationService } from "primeng/api";
import { FormDirective } from "./form.directive";
import { LoginComponent } from "./login/login.component";
import { AuthenticationService } from "./_services/authentication.service";
import { LogoutComponent } from "./logout/logout.component";
import { SharedModule } from "./shared/shared/shared.module";
import { PurchaseComponent } from "./purchase/purchase.component";
import { UtilityComponent } from "./utility/utility.component";
import { GstComponent } from "./gst/gst.component";
import { MastersComponent } from "./masters/masters.component";
import { AdministratorComponent } from "./administrator/administrator.component";
import { JwtInterceptor } from "./_helpers/JwtInterceptor";
import { ErrorInterceptor } from "./_helpers/error.interceptor";
import { BnNgIdleService } from "bn-ng-idle";
import { GetNameForCodesPipe } from './pipes/get-name-for-codes.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormDirective,
    LoginComponent,

    LogoutComponent,
    PurchaseComponent,
    UtilityComponent,
    GstComponent,
    MastersComponent,
    AdministratorComponent,
    GetNameForCodesPipe,
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
  providers: [
    MessageService,
    ConfirmationService,
    AuthenticationService,
    BnNgIdleService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
