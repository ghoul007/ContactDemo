import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
@Input() contact;
  constructor() { }

  ngOnInit() {
  }

}
