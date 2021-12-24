import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "../../services/auth.service";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> {
   return this.isLoggedIn(state) 
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.isLoggedIn(state)
  }

  private isLoggedIn(state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.userIsAuthenticated().pipe(
      tap((loggedIn) => {
        console.log(loggedIn)
        if(!loggedIn) {
          console.log('state url:', state.url)
          this.authService.redirectUrl = state.url 
          void this.router.navigateByUrl('/login')
        }
      })
    )
  }
} 