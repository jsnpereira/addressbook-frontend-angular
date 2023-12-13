import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppModule} from "../app.module";



@NgModule({
  declarations: [
    HeaderComponent,
    ContactFormComponent
  ],
    exports: [
        HeaderComponent,
        ContactFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class SharedModule { }
