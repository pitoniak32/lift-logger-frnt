import { Component, OnDestroy, OnInit } from "@angular/core"
import { Router } from "@angular/router"


@Component({
  template: `
    <div>
      Not Found
      <button routerLink="/login">
        Return Home
      </button>
    </div> 
  `, 
  selector: 'app-user',
})
export class NotFoundComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
