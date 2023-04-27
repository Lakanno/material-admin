import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { SuccessToastComponent } from './components/success-toast/success-toast.component';
import { ErrorToastComponent } from './components/error-toast/error-toast.component';
import { InfoToastComponent } from './components/info-toast/info-toast.component';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    SuccessToastComponent,
    ErrorToastComponent,
    InfoToastComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,

    MatButtonModule
  ],
  exports: [
    SuccessToastComponent,
    ErrorToastComponent,
    InfoToastComponent
  ]
})
export class NotificationModule { }
