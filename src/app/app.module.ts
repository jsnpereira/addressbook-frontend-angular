import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./pages/login/login.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupModule} from "./pages/signup/signup.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {EditContractModule} from "./pages/edit-contract/edit-contract.module";
import {NewContactModule} from "./pages/new-contact/new-contact.module";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    SignupModule,
    DashboardModule,
    NoopAnimationsModule,
    EditContractModule,
    NewContactModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
