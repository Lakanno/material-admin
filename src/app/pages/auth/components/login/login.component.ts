import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  hide:boolean = true;
  @Output() sendLoginForm = new EventEmitter<void>();

  constructor(private authService: AuthService,
    private router: Router){}

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

  onSignIn(): void{
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe((result) =>{
        console.log(result);
        this.sendLoginForm.emit();
      },
      (err: Error) =>{
        alert(err.message);
      })

    }
  }

  ngOnInit(): void {
    // if(this.authService.isLoggedIn()){
    //   this.router.navigate(['/profile'])
    // } 
  }
}
