import { Component, OnInit } from '@angular/core';
import {ContactService} from "../../core/service/contact/contact.service";
import {DataService} from "../../core/utils/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  private data: any;
  constructor(private contactService: ContactService,
              private dataService: DataService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.data = this.dataService.getDataClient();
  }


  saveNewContact(contact: any){
     console.log('Save new contact: '+JSON.stringify(contact));
     this.contactService.saveContact(this.data.token, contact).subscribe( response => {
       if(response.success){
         this.router.navigate(['dashboard']);
       }
     })
  }

}
