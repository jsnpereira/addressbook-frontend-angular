import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {EditContactComponent} from "./edit-contract/edit-contact.component";



@NgModule({
  declarations: [
    DashboardComponent,
    EditContactComponent
  ],
  exports: [
    DashboardComponent,
    EditContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
