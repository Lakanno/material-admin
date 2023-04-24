import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './containers/profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from "../../shared/shared.module";



@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    SharedModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

    ProfileRoutingModule
  ],
  exports: [
    ProfilePageComponent
  ]
})
export class ProfileModule { }
