import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommerceRoutingModule } from './commerce-routing.module';
import { CommercePageComponent } from './containers/commerce-page/commerce-page.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CommercePageComponent
  ],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    SharedModule,

    MatToolbarModule,
    MatIconModule, 
    MatButtonModule
  ],
  exports: [
    CommercePageComponent
  ]
})
export class CommerceModule { }
