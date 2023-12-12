import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "../../core/service/contact/contact.service";
import {DataService} from "../../core/utils/data.service";

@Component({
  selector: 'edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  private data: any;
  contactId: String;
  contact: any;
  editContact: string = 'edit';

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ContactService,
              private dataService: DataService) {
   this.contactId = this.activatedRoute.snapshot.params['editId'];

  }

  ngOnInit(): void {
    this.data = this.dataService.getDataClient();
    this.contactService.getContactById(this.data.token, this.contactId).subscribe( response => {
      this.contact = response.data;
    })
  }

}
