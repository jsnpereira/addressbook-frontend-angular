import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/page/login/login.component";
import {SignupComponent} from "./pages/signup/page/signup/signup.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {EditContactComponent} from "./pages/edit-contract/edit-contact.component";
import {NewContactComponent} from "./pages/new-contact/new-contact.component";

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component:DashboardComponent},
  {path: 'editContact/:editId', component: EditContactComponent},
  {path: 'newContact', component: NewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
