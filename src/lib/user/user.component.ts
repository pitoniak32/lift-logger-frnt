import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { AuthService } from '../../app/services/auth.service';
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
  error: any = undefined
  user: any = undefined 
  subscription: Subscription | undefined
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }
  
  async getUserInfo() {
    this.subscription = this.userService.getUser(await this.authService.token() || '', await this.authService.userId() || '').subscribe({
      next: (d) => {
        this.user = d
      },
      error: (error) => {
        this.error = { statusCode: error.error.statusCode, message: error.error.message }
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
