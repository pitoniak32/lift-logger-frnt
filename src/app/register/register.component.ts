import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernames = ['test1', 'test2', 'test3']

  userModel: User = new User('bob', 'bar', 'b2', 'bob', 'bob', 'b@gmail.com', 100, 7)

  constructor() { }


  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUser() {
    this.userModel = new User('', '', '', '', '', '', 0, 0)
  }

}
