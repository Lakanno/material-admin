import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ErrorAlertComponent } from '../shared/notifications/error-alert/error-alert.component';
import { InfoAlertComponent } from '../shared/notifications/info-alert/info-alert.component';
import { SuccessAlertComponent } from '../shared/notifications/success-alert/success-alert.component';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {
  public timeOut = 3000;
  positionClass: string = 'toast-top-center'
  constructor(private toastr: ToastrService) {
    
  }

  alertSuccessMessage(message: string, title: string){
    this.toastr.success(message, title, {
      positionClass: 'toast-top-center',
      timeOut: this.timeOut,
      tapToDismiss: true,
      closeButton: true
    });
  }

  alertErrorMessage(message: string, title: string){
    this.toastr.error(message, title, {
      positionClass: 'toast-top-center',
      timeOut: this.timeOut,
      tapToDismiss: true,
      closeButton: true
    });
  }
  
  alertInfoMessage(message: string, title: string){
    this.toastr.info(message, title, {
      positionClass: 'toast-top-center',
      timeOut: this.timeOut,
      tapToDismiss: true,
      closeButton: true
    });
  }


  // way 2
  successMessage(){
    this.toastr.show(
      'null',
      'null',
      {
        positionClass: 'toast-top-center',
        toastComponent: SuccessAlertComponent,
        timeOut: this.timeOut,
        tapToDismiss: true
      }
    );
  }


  errorMessage() {
    this.toastr.show(
      'null',
      'null',
      {
        positionClass: 'toast-top-center',
        toastComponent: ErrorAlertComponent,
        timeOut: this.timeOut,
        tapToDismiss: true
      }
    );
  }

  infoMessage() {
    this.toastr.show(
      'null',
      'null',
      {
        positionClass: 'toast-top-center',
        toastComponent: InfoAlertComponent,
        timeOut: this.timeOut,
        tapToDismiss: true,
      }
    );
  }



}
