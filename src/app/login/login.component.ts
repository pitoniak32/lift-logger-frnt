import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userModel: User = new User('bob', 'bar', 'b2', 'bob', 'bob', 'b@gmail.com', 100, 7)

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
  }

  login() {
    this.userModel = new User('', '', '', '', '', '', 0, 0)
  }
}
