import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../../../../core/service/contact/contact.service";
import {DataService} from "../../../../core/utils/data.service";

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  private data: any;
  contactId: String;
  contact: any;

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ContactService,
              private dataService: DataService,
              private router: Router) {
   this.contactId = this.activatedRoute.snapshot.params['editId'];

  }

  ngOnInit(): void {
    this.data = this.dataService.getDataClient();
    this.contactService.getContactById(this.data.token, this.contactId).subscribe( response => {
      this.contact = response.data;
    })
  }

  public saveEditContact(contactData:any){
    console.log("saveEditContact: "+JSON.stringify(contactData))
        this.contactService.updateContact(this.data.token, this.contact.id, contactData)
          .subscribe( res => {
            if(res.success){
              this.router.navigate(['dashboard']);
            }
          })
  }

}
