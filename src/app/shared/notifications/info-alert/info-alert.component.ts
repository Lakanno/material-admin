import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Toast, ToastPackage, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-info-alert',
  templateUrl: './info-alert.component.html',
  styleUrls: ['./info-alert.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('inactive', style({ opacity: 0 })),
      state('active', style({ opacity: 1 })),
      state('removed', style({ opacity: 0 })),
      transition(
        'inactive => active',
        animate('{{ easeTime }}ms {{ easing }}')
      ),
      transition(
        'active => removed',        animate('{{ easeTime }}ms {{ easing }}')
      )
    ])
  ],
  preserveWhitespaces: false
})
export class InfoAlertComponent extends Toast  {

  constructor(protected override toastrService: ToastrService, public override toastPackage: ToastPackage){
    super(toastrService, toastPackage);
  }
}
