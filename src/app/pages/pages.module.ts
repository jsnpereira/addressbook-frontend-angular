import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {EditContactComponent} from "./edit-contract/edit-contact.component";
import {NewContactComponent} from "./new-contact/new-contact.component";



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
    SharedModule
  ]
})
export class PagesModule { }
