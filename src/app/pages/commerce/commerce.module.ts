import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceRoutingModule } from './commerce-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { ManageComponent } from './components/manage/manage.component';
import { GridComponent } from './components/grid/grid.component';
import { CommercePageComponent } from './containers/commerce-page/commerce-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CommercePageComponent,
    
    ManageComponent,
    GridComponent,
    ProductPageComponent
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
  ]
})
export class CommerceModule { }
