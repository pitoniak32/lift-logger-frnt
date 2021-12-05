import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent implements OnInit {

  @Input() userId: string = ''
  
  lifts: any = []

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  refresh(): void {
    console.log(this.userId)
    this.userService.getUserLifts(this.userId).subscribe(res => {
      console.log(res)
      this.lifts = res
    })
  }
}
