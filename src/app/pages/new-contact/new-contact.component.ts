import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
      }
    });
  }

  ngOnInit(): void {

  }

}
