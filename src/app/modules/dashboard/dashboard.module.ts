import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { SearchContactComponent } from './components/search-contact/search-contact.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DashboardComponent,
    ContactCardComponent,
    ContactListComponent,
    SearchContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DashboardModule { }
