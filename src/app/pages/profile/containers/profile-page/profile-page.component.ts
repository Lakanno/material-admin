import { Component } from '@angular/core';
import { UserService } from 'src/app/pages/auth/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { SuccessAlertComponent } from 'src/app/shared/notifications/success-alert/success-alert.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  userSource: any = [];
  displayedColumns: string[] = ['id' ,'name', 'username', 'email'];

  constructor(private userService: UserService, private notifyService: NotificationService){
    this.getUsersData();

  }

  getUsersData(){
    this.userService.getUsers().subscribe(
      users => {
      // this.notifyService.alertInfoMessage('Success', '');
      this.notifyService.alertSuccessMessage('Success', '');
      this.userSource = users;
    },
      error => {
        this.notifyService.alertErrorMessage('error', '');
      }
    )
  }

}
