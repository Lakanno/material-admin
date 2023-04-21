import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()isMenuOpened: boolean = false;
  @Output()isShowSidebar = new EventEmitter<boolean>();
  public user$!: Observable<any>

  public openMenu():void{
    this.isMenuOpened = !this.isMenuOpened;
    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut():void{
    alert('sign out');
  }

}
