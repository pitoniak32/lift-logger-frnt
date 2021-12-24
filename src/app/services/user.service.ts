import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User | undefined

  constructor(private http: HttpClient) { 
  }

  get userId() {
    return this.user?.id
  }

  public getUser(access_token: string, userId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/v1/user/${userId}`, {headers: new HttpHeaders({'Authorization': `Bearer ${access_token}`})}) 
  }

  public getUsers(access_token: string): Observable<any> {
    return this.http.get('http://localhost:3000/v1/user', {headers: new HttpHeaders({'Authorization': `Bearer ${access_token}`})}) 
  }

  public getUserLifts(id: string): Observable<any> { 
    return this.http.get(`http://localhost:3000/v1/lift-root/user/${id}`, {withCredentials: true})
  }
}
