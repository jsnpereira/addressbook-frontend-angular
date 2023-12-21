import { Component, OnInit } from '@angular/core';
import {DataService} from "../utils/data.service";
import {Router} from "@angular/router";


@Component({
  selector: 'header-top',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public username?: String;

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit(): void {
    let data = this.dataService.getDataClient();
    this.username = data.email;
    console.log(data);
  }

  newContactButton(){
    this.router.navigate(['newContact']).then( nav =>{
      console.log(nav)
    }, error => {
      console.log(error)
    })
  }

  logoutUsername(){
    this.dataService.logoutUsername();
    this.router.navigate(['login']).then( nav =>{
      console.log(nav)
    }, error => {
      console.log(error)
    })
  }

}
