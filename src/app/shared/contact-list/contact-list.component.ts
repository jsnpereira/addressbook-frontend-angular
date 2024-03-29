import {Component, OnInit} from '@angular/core';
import {DataService} from "../../core/utils/data.service";
import {ContactService} from "../../core/service/contact/contact.service";

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  private data: any;
  setContactsList: any;
  getContactsList: any;

  constructor(private dataService: DataService, private contactService: ContactService) { }

  ngOnInit(): void {
    this.data = this.dataService.getDataClient();
      this.contactService.getAllContactsByUsername(this.data.token).forEach((contact) => {
        this.setContactsList = contact.data;
        this.getContactsList = this.setContactsList;
      });
  }

  getListBySearchValue(value: String){
      this.getContactsList = this.setContactsList.filter((res: any) => {
        return !res.name.toLowerCase().indexOf(value.toLowerCase());
    });
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

  checkEmptyList(): boolean {
     if( this.getContactsList.length <= 0){
        return true;
     } else {
       return  false;
     }
  }

  private updateContactList(id: string){
      this.setContactsList = this.setContactsList.filter((contact: { _id: string; }) => contact._id != id);
      this.getContactsList = this.setContactsList;

  }

}
