import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }

  setToken(token: string): void{
    localStorage.setItem('TOKEN', token);
  }

  getToken(): string | null{
    return localStorage.getItem('TOKEN');
  }

  isLoggedIn(){
    return this.getToken() !== null;
  }

  logout(){
    localStorage.removeItem('TOKEN');
    this.router.navigate(['auth'])
  }

  login({email, password}: any): Observable<any> {
    if (email === 'test@gmail.com' && password === 'test') {
      this.setToken('test-token');
      return of({name: 'Test', email: 'test@gmail.com' });
    }
    return throwError(new Error('Failed to Login'));
  }
}
