import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup/signup.component';
import { SignupFormCardComponent } from './components/signup-form-card/signup-form-card.component';
import {ReactiveFormsModule} from "@angular/forms";
import { UserHasRegisteredComponent } from './components/user-has-registered/user-has-registered.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SignupComponent,
    SignupFormCardComponent,
    UserHasRegisteredComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SignupModule { }
