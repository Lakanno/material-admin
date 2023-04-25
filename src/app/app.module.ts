import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ProfileModule } from './pages/profile/profile.module';
import { CommerceModule } from './pages/commerce/commerce.module';
import { UserModule } from './pages/user/user.module';
import { AuthModule } from './pages/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    DashboardModule,
    SharedModule,
    ProfileModule,
    CommerceModule,
    UserModule,
    AuthModule,

    MatCardModule,
    MatButtonModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
