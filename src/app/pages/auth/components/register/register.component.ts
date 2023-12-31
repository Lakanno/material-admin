import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  @Output() sendRegisterForm = new EventEmitter<void>();

  constructor(private authService: AuthService, private userService: UserService){

  }


  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })
  get email(){
    return this.registerForm.get('email') as FormControl;
  }

  get password(){
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword') as FormControl;
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
    return this.password.hasError('email') ? 'Not a valid email' : '';
  }

  getConfirmPasswordErrorMessage(){
    if (this.confirmPassword.hasError('required')) {
      return "You must enter password";
    }
    return this.confirmPassword.hasError('email') ? 'Not a valid email' : '';
  }
  onRegister(){
    if (this.registerForm.valid && this.password.value === this.confirmPassword.value) {
      // this.authService.login(this.registerForm.value).subscribe((result) =>{
      //   this.sendRegisterForm.emit();
      // },
      // (err: Error) =>{
      //   alert(err.message);
      // })
      this.userService.createUser(this.registerForm.value).subscribe((result)=>{
        console.log('result', result);
          this.authService.login(this.registerForm.value).subscribe((result) =>{
            this.sendRegisterForm.emit();
          },
          (err: Error) =>{
            alert(err.message);
          })
      })

      
    }
  }
}
