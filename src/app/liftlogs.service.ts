import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


export interface LiftLogGroup {
  title: string
  items: LiftLogItem[]
}

export interface LiftLogItem {
  title: string
  content: string
  date: Date
}


@Injectable({
  providedIn: 'root'
})
export class LiftLogsService {

  constructor(private http: HttpClient) { }

  public getLiftLogs(): Observable<any> {
    return this.http.get('http://localhost:3000/v1/lift-logs')
  }
}
