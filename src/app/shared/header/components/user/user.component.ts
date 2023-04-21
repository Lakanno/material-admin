import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: any;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public flatlogicEmail: string = "https://flatlogic.com";

  public signOutEmit(): void {
    this.signOut.emit();
  }
}
