import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service';
import { saveAs } from 'file-saver/FileSaver';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  initContacts: any;
  search: any;
  articles: any = [];
  @Output() event = new EventEmitter();
  contactDetails: any;
  contacts: any = [];
  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getArticle().subscribe(res => {
      this.articles = res;
    });
    this.contactService.getContact().subscribe(res => {
      this.initContacts = res;
      this.contacts = res;
    });
  }
/**
 * Displaying contacts details
 * @param row Object
 */
  showDetails(row) {
    this.event.emit(row)
  }

  /**
   * Filtering 
   */
  searchTable(search) {
    let key = search.target.value;
    if (key) {
      let rows = this.initContacts.filter(res =>
        res['EMAIL'] && res['EMAIL'].toString().includes(key) ||
        res['VORNAME'] && res['VORNAME'].toString().includes(key) ||
        res['NACHNAME'] && res['NACHNAME'].toString().includes(key) ||
        res['LIEFERANT'] && res['LIEFERANT'].toString().includes(key)

      )
      this.contacts = rows;
    } else {
      this.contacts = this.initContacts;
    }
  }


  save(data) {
    this.saveToFileSystem(data);
    debugger;

  }


  private saveToFileSystem(response) {
    const filename = "farouk";
    const blob = new Blob([JSON.stringify(response)], { type: 'application/json' });
    saveAs(blob, filename);
  }


}