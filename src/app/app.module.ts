import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from '../lib/user/user.component';
import { RegisterComponent } from '../lib/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../lib/login/login.component';
import { AppRoutingModule } from './routing/app.routing.module';
import { NotFoundComponent } from './routing/not-found.component';
import { AuthGuardService } from './routing/guards/auth-guard.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
