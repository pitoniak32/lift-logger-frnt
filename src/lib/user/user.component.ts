import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../../app/services/user.service';

@Component({
  template: `
    <h1 style="text-align: center;">Welcome to your home page!</h1>
      <div> 
        <pre *ngIf="error!=undefined">
          {{error | json}}
        </pre>
        <pre *ngIf="error===undefined && user !== undefined">
          {{ user | json }}
        </pre>
      </div>
    <div style="text-align: center;">
      <button (click)="getUserInfo()">Get UserInfo</button>
    </div>
  `,
  selector: 'app-user',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  access_token = ""
  error: any = undefined
  user: any = undefined 
  subscription: Subscription | undefined
  constructor(
    private userService: UserService,
  ) {
    this.access_token = userService.access_token
  }

  ngOnInit(): void {
  }
  
  getUserInfo() {
    if(this.access_token !== "default") {
      this.subscription = this.userService.getUser().subscribe({
        next: (d) => {
          this.user = d
        },
        error: (error) => {
          this.error = { statusCode: error.error.statusCode, message: error.error.message }
        }
      })
    } else {
      this.user = "You must login to see your info."
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
