import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide:boolean = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  get email(){
    return this.loginForm.get('email') as FormControl;
  }

  get password(){
    return this.loginForm.get('password') as FormControl;
  }

  getEmailErrorMessage(){
    if (this.email.hasError('required')) {
      return "You must enter email";
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage(){
    if (this.password.hasError('required')) {
      return "You must enter password";
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  onSignIn(){
    alert('Sign In');
  }
}
