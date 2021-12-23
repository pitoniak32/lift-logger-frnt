import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  userModel: User = new User('bob', 'bar', 'b2', 'bob', 'bob', 'b@gmail.com', 100, 7)
  login: Subscription | undefined
  loggedIn: boolean = false
  error_message: string = ""

  constructor(
    private httpService: HttpClient,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.login = this.userService.login(this.userModel.username, this.userModel.password).subscribe({
      next: (result) => {
        this.loggedIn = true 
        this.userService.access_token = result.access_token
        this.error_message = ""
        this.router.navigateByUrl("/user")
      }, 
      error: (error) => { 
        if(error.status === 401) {
          this.error_message = "Username or Password Incorrect." 
        }
        this.loggedIn = false
      },
    })
  }
  
  ngOnDestroy(): void {
    this.login?.unsubscribe()
  }
}
