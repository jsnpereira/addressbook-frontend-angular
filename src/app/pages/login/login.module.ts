import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { LoginFormCardComponent } from './components/login-form-card/login-form-card.component';
import { UserNotRegisteredComponent } from './components/user-not-registered/user-not-registered.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {UserService} from "../../core/service/user/user.service";
import {CoreModule} from "../../core/core.module";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    LoginComponent,
    LoginFormCardComponent,
    UserNotRegisteredComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ]
})
export class LoginModule { }
