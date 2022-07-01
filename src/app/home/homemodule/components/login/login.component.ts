import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthStateService } from '../../services/auth-state.service';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: FormGroup;
  loginForm: FormGroup;
  errors: any = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService) {

      this.registerForm = this.fb.group({
        name: [''],
        email: [''],
        password: [''],
        //password_confirmation: [''],
      });

      this.loginForm = this.fb.group({
        email: [],
        password: [],
      });
     }

  ngOnInit(): void {

    let signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

    console.log(signupButton)
    signupButton.addEventListener('click', () => {
      userForms.classList.remove('bounceRight')
      userForms.classList.add('bounceLeft')
    }, false)
    
  
    loginButton.addEventListener('click', () => {
      userForms.classList.remove('bounceLeft')
      userForms.classList.add('bounceRight')
    }, false)

    let userState=this.token.isLoggedIn()
    console.log(userState);
  }


  onSubmit(){
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
       // this.router.navigate(['login']);
      }
    );
  }

  onSubmitLogin(){
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.responseHandler(result);
      console.log(result)
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['blog']);

        let storedtok=this.token.getToken();
       // console.log(storedtok);


       let userState=this.token.isLoggedIn()
       console.log(userState);
      }
    );
  }

  responseHandler(data:any) {
    this.token.handleData(data.token);
  }
}
