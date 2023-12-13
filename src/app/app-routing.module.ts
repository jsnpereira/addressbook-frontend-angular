import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/login/pages/login/login.component";
import {SignupComponent} from "./modules/signup/pages/signup/signup.component";
import * as url from "url";
import {DashboardComponent} from "./modules/dashboard/pages/dashboard/dashboard.component";
import {EditContactComponent} from "./modules/edit-contract/page/edit-contact/edit-contact.component";

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: 'editContact/:editId', component: EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
