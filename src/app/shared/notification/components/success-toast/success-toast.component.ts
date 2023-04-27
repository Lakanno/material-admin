import { Component } from '@angular/core';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-success-toast',
  templateUrl: './success-toast.component.html',
  styleUrls: ['./success-toast.component.scss']
})
export class SuccessToastComponent {
  constructor(private toastrService: ToastrService){}

  showSuccess() {
    this.toastrService.success('Hello world!', 'Toastr fun!');
  }
}
