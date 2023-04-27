import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent {
  constructor(private notifyService: NotificationService){

  }

  onSuccess(){
    this.notifyService.successMessage();
  }

  onError(){
    this.notifyService.errorMessage();
  }

  onInfo(){
    this.notifyService.infoMessage();
  }


}
