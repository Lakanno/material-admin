import { Component, EventEmitter, Input, Output } from '@angular/core';
import { routes } from 'src/app/consts/routes';
import { AuthService } from 'src/app/pages/auth/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: any;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService){}

  public signOutEmit(): void {
    this.authService.logout();
    this.signOut.emit();
  }
}
