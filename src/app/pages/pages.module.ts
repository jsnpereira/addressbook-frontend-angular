import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {EditContactComponent} from "./edit-contract/edit-contact.component";
import {NewContactComponent} from "./new-contact/new-contact.component";
import {SignupModule} from "./signup/signup.module";
import {LoginModule} from "./login/login.module";



@NgModule({
  declarations: [
    DashboardComponent,
    EditContactComponent,
    NewContactComponent

  ],
  exports: [
    DashboardComponent,
    EditContactComponent,
    NewContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    SignupModule,
    LoginModule
  ]
})
export class PagesModule { }
