import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'electricity-app-1';

  constructor(private router : Router) {

  }

  click() {
    this.router.navigate(['thanks-note'])
  }
}
