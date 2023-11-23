import { Component } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.component.scss']

//   template: `
// <header-top></header-top>
//     <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'Address book app';

  showHead: boolean = false;
  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        if (event.url == '/login' || event.url == '/signup' || event.url == '/') {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

}
