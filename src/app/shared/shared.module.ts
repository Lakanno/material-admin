import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { LayoutComponent } from './layout/layout.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [
    HeaderModule,
    LayoutComponent
  ]
})
export class SharedModule { }
