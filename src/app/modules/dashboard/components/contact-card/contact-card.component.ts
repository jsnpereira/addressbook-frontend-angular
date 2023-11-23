import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: any;
  constructor() { }

  ngOnInit(): void {
  }

}
