import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/containers/dashboard/dashboard.component';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

const routes: Routes = [  {
  path: 'dashboard',
  pathMatch: 'full',
  loadChildren: () =>
    import('./pages/dashboard/dashboard.module').then(
      (m) => m.DashboardModule
    ),
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
