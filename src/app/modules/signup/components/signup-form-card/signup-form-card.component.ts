import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/service/user/user.service";


@Component({
  selector: 'app-signup-form-card',
  templateUrl: './signup-form-card.component.html',
  styleUrls: ['./signup-form-card.component.scss']
})
export class SignupFormCardComponent implements OnInit {

  public signUpForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required,Validators.minLength(6), Validators.maxLength(30) ]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(15)]]
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public checkNameField(){
     return this.checkField('name');
  }

  public checkEmailField() {
    return this.checkField('email');
  }

  public checkPasswordField(){
   return this.checkField('password');
  }

private checkField(variable: string){
  return this.signUpForm.get(variable)?.errors &&
    (this.signUpForm.get(variable)?.touched || this.signUpForm.get(variable)?.dirty);
}

public getNameErrorMessage(){
   if(this.signUpForm.controls['name']?.errors?.['minlength']){
     return 'Type your name must be minimum '+this.signUpForm.controls['name']?.errors?.['minlength']['requiredLength']+ ' chars';
   } else if(this.signUpForm.controls['name']?.errors?.['maxlength']){
     return 'Type your name must be maximum '+this.signUpForm.controls['name']?.errors?.['maxlength']['requiredLength']+ ' chars';
   } else if(this.signUpForm.controls['name']?.errors?.['required']){
     return 'Type your name must be required'
   }
  return null;
}

  public getEmailErrorMessage(){
    if(this.signUpForm.controls['email']?.errors?.['email']){
      return 'Type your e-mail must be valid like "your-email@company.com"';
    } else if(this.signUpForm.controls['email']?.errors?.['required']){
      return 'Type your e-mail must be required'
    }
    return null;
  }


  public getPasswordErrorMessage(){
    if(this.signUpForm.controls['password']?.errors?.['minlength']){
      return 'Type your password must be minimum '+this.signUpForm.controls['name']?.errors?.['minlength']['requiredLength']+ ' chars, numbers and characters';
    } else if(this.signUpForm.controls['password']?.errors?.['maxlength']){
      return 'Type your password must be maximum '+this.signUpForm.controls['name']?.errors?.['maxlength']['requiredLength']+ ' chars, numbers and characters';
    } else if(this.signUpForm.controls['password']?.errors?.['required']){
      return 'Type your password must be required'
    }
    return null;
  }

  public submitSignUpForm(){
    if(this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      this.userService.createNewUser(this.signUpForm.value).subscribe(
        (res) => {
          console.log(res);
        }
      )
    }
  }

}
