import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { RouterModule } from '@angular/router';

// angular material imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';

// components imports
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,

    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatTreeModule
  ],
  exports: [
    HeaderModule,
    LayoutComponent, 
    SidebarComponent
  ]
})
export class SharedModule { }
