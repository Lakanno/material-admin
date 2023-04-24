import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatToolbarModule
  ],
  exports: [
    
  ]
})
export class UserModule { }
