import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

 
  contact: any;
  contacts: any;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    
    this.contactService.getContact().subscribe(res => {
      this.contacts = res;
    });
    
 
  }


  test(event){

    this.contact =  event;

    
  }

}
