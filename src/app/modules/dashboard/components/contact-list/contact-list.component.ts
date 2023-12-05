import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../../core/utils/data.service";
import {ContactService} from "../../../../core/service/contact/contact.service";
import {Contact} from "../../../../core/models/contact";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  private data: any;
  contactsList: any;

  constructor(private dataService: DataService, private contactService: ContactService) { }

  ngOnInit(): void {
    this.data = this.dataService.getDataClient();
     console.log('Token: '+this.data.token)
      this.contactService.getAllContactsByUsername(this.data.token).forEach((contact) => {
        console.log(contact);
        this.contactsList = contact.data;
        console.log(this.contactsList)
      });
  }
}
