import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../../lib/login/login.component";
import { RegisterComponent } from "../../lib/register/register.component";
import { UserComponent } from "../../lib/user/user.component";
import { AuthGuardService } from "./guards/auth-guard.service";
import { NotFoundComponent } from "./not-found.component";

const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
  },
  { 
    path: 'register', 
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: RegisterComponent,
  },
  { 
    path: 'user', 
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService],
    component: UserComponent,
  },
  { 
    path: '**', 
    canActivate: [AuthGuardService],
    component: NotFoundComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule],
})
export class AppRoutingModule {}