import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SuccessAlertComponent } from '../shared/notifications/success-alert/success-alert.component';

@Injectable({
  providedIn: 'root'
})

export class NotificationService {

  constructor(private toastr: ToastrService) {
    
  }
  
  successMessage(message: string, title?: string) {
    this.toastr.success(message, title);
  }
  errorMessage(message: string, title?: string) {
    this.toastr.error(message, title);
  }

  warningMessage(message: string, title?: string) {
    this.toastr.warning(message,title);
  }

  infoMessage(message: string, title?: string) {
    this.toastr.info(message,title);
  }

}
