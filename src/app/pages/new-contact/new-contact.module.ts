import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewContactComponent } from './page/new-contact/new-contact.component';
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    NewContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewContactModule { }
