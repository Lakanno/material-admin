import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';
import { ProfilePageComponent } from './pages/profile/containers/profile-page/profile-page.component';

const routes: Routes = [ 
  {
    path: '',
    component: ProfilePageComponent
  },

  {
    path: 'dashboard',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },

  {
    path: 'profile',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'commerce',
    loadChildren: () => import('./pages/commerce/commerce.module').then(m => m.CommerceModule)
  },

  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule)
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
