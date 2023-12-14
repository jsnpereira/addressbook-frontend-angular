import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() contact: any;
  @Output() deleteContactId = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  deleteButton(id: string): void {
    this.deleteContactId.emit(id);
  }
}
