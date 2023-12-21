import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./pages/login/login.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupModule} from "./pages/signup/signup.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {EditContractModule} from "./pages/edit-contract/edit-contract.module";
import {NewContactModule} from "./pages/new-contact/new-contact.module";
import {CoreModule} from "./core/core.module";
import {PagesModule} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    SignupModule,
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
