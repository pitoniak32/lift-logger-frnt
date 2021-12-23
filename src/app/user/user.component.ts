import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  access_token = ""
  id = ""
  user: any = new User("", "", "", "", "", "", 0, 0)
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
      this.subscription = this.userService.getUser().subscribe((d) => {
        this.user = d
      })
    }
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
