import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material imports
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// components imports
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './containers/header/header.component';



@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,

    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    UserComponent,
    HeaderComponent
  ]
})
export class HeaderModule { }
