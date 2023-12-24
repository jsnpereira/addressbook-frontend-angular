import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ContactCardComponent} from "./contact-card/contact-card.component";
import {ContactListComponent} from "./contact-list/contact-list.component";
import {SearchContactComponent} from "./search-contact/search-contact.component";

@NgModule({
  declarations: [
    ContactFormComponent,
    ContactCardComponent,
    ContactListComponent,
    SearchContactComponent
  ],
    exports: [
        ContactCardComponent,
        ContactFormComponent,
        ContactListComponent,
      SearchContactComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class SharedModule { }
