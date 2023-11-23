import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from "../../../../core/service/user/user.service";
import {DataService} from "../../../../core/utils/data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login-form-card',
  templateUrl: './login-form-card.component.html',
  styleUrls: ['./login-form-card.component.scss']
})
export class LoginFormCardComponent implements OnInit {
  public msgError!: string ;


  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(private userService: UserService,
              private dataService: DataService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  goDashboard(){
    this.router.navigate(['dashboard']).then( nav =>{
      console.log(nav)
    }, error => {
      console.log(error)
    })
  }
  ngOnInit(): void {
      this.msgError = ''
  }

  updateField(){
    this.msgError ='';
  }

  public checkUsernameField(){
    return this.loginForm.get('email')?.errors &&
      (this.loginForm.get('email')?.touched || this.loginForm.get('email')?.dirty);
  }

  public checkPasswordsField(){
    return this.loginForm.get('password')?.errors &&
      (this.loginForm.get('password')?.touched || this.loginForm.get('password')?.dirty);
  }

  public submitLoginForm(){

    if(this.loginForm.valid) {
      var dataClient =  {
        email: String,
        token: String,
        logged: Boolean,
      };

      this.userService.checkUserService(this.loginForm.value).subscribe(
        (res) => {
          if (res.success) {
            console.log(res);

            dataClient.email = res.data.email;
            dataClient.token = res.token;
            dataClient.logged = true;
            this.dataService.saveDataClient(dataClient);
            this.goDashboard();
          }
        },
        (error) => {
          if(error){
            this.msgError = "Username or password invalid, please you can try again."
          }
         })
    }
  }

}
