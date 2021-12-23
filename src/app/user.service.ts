import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _access_token = "default"
  private jwtHelper: JwtHelperService

  constructor(private http: HttpClient) { 
    this.jwtHelper = new JwtHelperService()
  }

  get access_token() {
    return this._access_token
  }

  get userId() {
    return this.jwtHelper.decodeToken(this.access_token).userId
  }

  set access_token(token: string) {
    this._access_token = token
  }

  public getUser(): Observable<any> {
    return this.http.get(`http://localhost:3000/v1/user/${this.userId}`, {headers: new HttpHeaders({'Authorization': `Bearer ${this.access_token}`})}) 
  }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/v1/user', {headers: new HttpHeaders({'Authorization': `Bearer ${this.access_token}`})}) 
  }

  public getUserLifts(id: string): Observable<any> { 
    return this.http.get(`http://localhost:3000/v1/lift-root/user/${id}`, {withCredentials: true})
  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      'http://localhost:3000/v1/user/login', 
      {username, password}, {withCredentials: true}
    )
  }
}
