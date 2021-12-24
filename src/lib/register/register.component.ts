import { Component, OnInit } from '@angular/core';
import { User } from '../../app/models/user';

@Component({
  template: `
    <div id="register-form" class="container user-form" style="padding-top: 10px;">
      <div [hidden]="submitted">
        <form #userLoginForm="ngForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" required [(ngModel)]="userModel.email" name="email" #email="ngModel">
            <div [hidden]="email.valid || email.pristine" class="alert alert-danger" style="padding: 5px;">
              email is required
            </div>
          </div>
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
          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" class="form-control" id="confirm-password" required [(ngModel)]="userModel.password" name="password" #password="ngModel">
            <div [hidden]="password.valid || password.pristine" class="alert alert-danger" style="padding: 5px;">
              password is required
            </div>
          </div>
          <button type="submit" class="btn btn-default" [disabled]="!userLoginForm.form.valid">Register</button>
        </form>
      </div>
      <div [hidden]="!submitted">
        <h2>You have been registered!</h2>
      </div>
    </div>
  `,
  selector: 'register-form',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernames = ['test1', 'test2', 'test3']

  userModel: User = new User('id', 'bob', 'bar', 'b2', 'bob', 'bob', 'b@gmail.com', 100, 7)

  constructor() { }


  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.userModel = new User('', '', '', '', '', '', '', 0, 0)
  }

}
