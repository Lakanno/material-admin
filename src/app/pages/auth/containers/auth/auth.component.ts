import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../../../../consts/routes';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  public routes: typeof routes = routes;

  constructor(
    private router: Router
  ) { }

  sendLoginForm(){
    this.router.navigate([this.routes.DASHBOARD]).then();
  }

  sendRegisterForm(){
    this.router.navigate([this.routes.PROFILE]).then();
  }

}
