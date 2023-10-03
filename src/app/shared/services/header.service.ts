import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'ka';

@Injectable({
  providedIn: 'root'
})



export class HeaderService {
  constructor() { }

  private chosenLanguageSubject$ = new BehaviorSubject('en');
  public chosenLanguage$ = this.chosenLanguageSubject$.asObservable();

  changeLanguage(){
    this.chosenLanguageSubject$.next(this.chosenLanguageSubject$.value === 'en' ? 'ka' : 'en');
  }

}
