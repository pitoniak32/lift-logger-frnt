
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, map, Observable, ReplaySubject, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper: JwtHelperService
  private _refresh_token = new BehaviorSubject<string | undefined>(undefined)
  private _access_token = new BehaviorSubject<string | undefined>(undefined)
  public access_token = this._access_token.asObservable()
  private _redirectUrl: string = ''
  private _userIsAuthenticated = new BehaviorSubject<boolean>(false)
  user$ = new ReplaySubject<any>(undefined)

  // TODO: remove public setters from private members... They need to be modified inside based on the users auth state.
  // TODO: create an observable decoded token so the user can get their id from the access token. 

  constructor(private router: Router, private http: HttpClient) {
    this.jwtHelper = new JwtHelperService()
  }

  userIsAuthenticated(): Observable<boolean> {
    return this._userIsAuthenticated
  }

  get userId() {
    return this.jwtHelper.decodeToken(this.token).userId
  }

  set redirectUrl(url: string) {
    this._redirectUrl = url
  }

  get redirectUrl(): string {
    return this._redirectUrl
  }
  
  get token() {
    return this._access_token.getValue()
  }
  
  public async login(username: string, password: string) {
    console.log('logging in user...', username, password)
    const loginObser = this.http.post<any>(
      'http://localhost:3000/v1/user/login', 
      {username, password}, {withCredentials: true}
    ).pipe(
      tap((data) => {
        this._userIsAuthenticated.next(true)
        this._access_token.next(data.access_token)
      }),
    )

    await lastValueFrom(loginObser)

    this.router.navigate([this.redirectUrl])
  }
}
