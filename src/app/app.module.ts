import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./modules/login/login.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupModule} from "./modules/signup/signup.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import { EditContactComponent } from './modules/edit-contact/edit-contact.component';



@NgModule({
  declarations: [
    AppComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    SignupModule,
    DashboardModule,
    NoopAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
