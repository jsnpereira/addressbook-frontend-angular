import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactService} from "../../core/service/contact/contact.service";
import {DataService} from "../../core/utils/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.scss']
})
export class SearchContactComponent implements OnInit {
  @Output() searchValue: EventEmitter<String> = new EventEmitter<String>();


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  newContactButton(){
    this.router.navigate(['newContact']);
  }

  search(value: String) {
    this.searchValue.emit(value);
  }

}
