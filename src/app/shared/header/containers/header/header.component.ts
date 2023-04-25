import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from '../../../../consts/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public routers: typeof routes = routes;
  @Input()isMenuOpened: boolean = false;
  @Output()isShowSidebar = new EventEmitter<boolean>();
  public user$!: Observable<any>

  constructor(private router: Router){

  }

  public openMenu():void{
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut():void{
    this.router.navigate([this.routers.AUTH]);
  }

}
