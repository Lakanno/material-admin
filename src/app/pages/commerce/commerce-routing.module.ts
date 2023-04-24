import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { ManageComponent } from './components/manage/manage.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent
  },
  {
    path: 'grid',
    component: GridComponent
  },
  {
    path: 'page',
    component: ProductPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommerceRoutingModule { }
