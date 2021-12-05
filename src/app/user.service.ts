import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/v1/user')
  }

  public getUserLifts(id: string): Observable<any> {
    return this.http.get(`http://localhost:3000/v1/lift-root/user/${id}`)
  }
}
