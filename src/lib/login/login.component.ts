import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../app/models/user';
import { AuthService } from '../../app/services/auth.service';

@Component({
  template: `
    <div id="login-form" class="container user-form">
      <form #userLoginForm="ngForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" class="form-control" id="username" required [(ngModel)]="userModel.username" name="username" #username="ngModel">
          <div [hidden]="username.valid || username.pristine" class="alert alert-danger" style="padding: 5px;">
              username is required
          </div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" required [(ngModel)]="userModel.password" name="password" #password="ngModel">
          <div [hidden]="password.valid || password.pristine" class="alert alert-danger" style="padding: 5px;">
            password is required
          </div>
        </div>
        <div id="button-box">
          <button id="login-submit-button" type="submit" class="btn btn-default" [disabled]="!userLoginForm.form.valid">Login</button>
          <button id="register-redirect-button" routerLink="/register" class="btn btn-default">Register</button>
        </div>
      </form>
    </div>

    <div> 
      <code *ngIf="error_message" type="json">
        {{error_message | json}}
      </code>
    </div>
  `,
  selector: 'login-form',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userModel: User = new User('id', 'bob', 'bar', 'b2', 'bob', 'bob', 'b@gmail.com', 100, 7)
  error_message: string = ""

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.authService.login(this.userModel.username, this.userModel.password)
  }
  
  ngOnDestroy(): void {
  }
}
