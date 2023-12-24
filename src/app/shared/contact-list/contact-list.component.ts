import { Component, OnInit } from '@angular/core';
import {DataService} from "../../core/utils/data.service";
import {ContactService} from "../../core/service/contact/contact.service";

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
      this.contactService.getAllContactsByUsername(this.data.token).forEach((contact) => {
        this.contactsList = contact.data;
      });
  }

  getListBySearchValue(value: String){
    console.log("=========================================");
      this.contactService.searchContact(this.data.token, value).forEach((contact) => {
        console.log(contact);
      })
    console.log("=========================================");
  }


  deleteContactList(id: string){
      this.contactService.deleteContact(this.data.token, id).subscribe(
          (res) =>{
              if (res.success){
                  this.updateContactList(id);
              }
          }
      )
  }

  private updateContactList(id: string){
      this.contactsList = this.contactsList.filter((contact: { _id: string; }) => contact._id != id);
  }
}
