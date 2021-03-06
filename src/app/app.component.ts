import { Component } from '@angular/core';

@Component({
  template: `
    <div class="nav">
      <h3 style="padding: 0px 0px 10px 10px;">{{title}}</h3>
      <nav style="margin-left: auto; padding: 10px 10px 0px 0px;">
        <a style="padding-right: 5px;" routerLink="/login" routerLinkActive="active">Login</a>
        <a style="padding-right: 5px;" routerLink="/register" routerLinkActive="active">Register</a>
      </nav>
    </div>
    <router-outlet style="position: relative;"></router-outlet>
  `,
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lift-logger-frnt';
}
