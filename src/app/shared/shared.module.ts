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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';

// components imports
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { SettingsComponent } from './settings/settings.component';
import { SuccessAlertComponent } from './notifications/success-alert/success-alert.component';
import { ErrorAlertComponent } from './notifications/error-alert/error-alert.component';
import { InfoAlertComponent } from './notifications/info-alert/info-alert.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SettingsComponent,
    SuccessAlertComponent,
    ErrorAlertComponent,
    InfoAlertComponent
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
    MatTreeModule,
    MatSlideToggleModule,
    MatRadioModule
  ],
  exports: [
    HeaderModule,
    LayoutComponent, 
    SidebarComponent
  ]
})
export class SharedModule { }
