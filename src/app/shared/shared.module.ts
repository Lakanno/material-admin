import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { LayoutComponent } from './layout/layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    HeaderModule,
    LayoutComponent
  ]
})
export class SharedModule { }
