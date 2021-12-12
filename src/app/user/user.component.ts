import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //users$: Observable<any>
  errors = ['test-error1', 'test-error2']

  constructor(private userService: UserService) {
    //this.users$ = this.userService.getUsers()
  }

  ngOnInit(): void {
  }
}
