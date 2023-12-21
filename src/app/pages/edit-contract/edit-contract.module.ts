import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditContactComponent} from "./page/edit-contact/edit-contact.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [EditContactComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EditContractModule { }
