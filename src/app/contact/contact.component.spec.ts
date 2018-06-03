import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ContactService } from './contact.service';
import { HttpClient } from '@angular/common/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import { RouterTestingModule } from "@angular/router/testing";
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { By } from '@angular/platform-browser';


describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, NgxDatatableModule],
      declarations: [ContactComponent, ContactListComponent, ContactDetailsComponent],
      // schemas: [NO_ERRORS_SCHEMA],
      providers: [ContactService, { provide: HttpClient, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', async(() => {
    console.log(document.querySelector('app-contact-list').innerHTML);

    expect(component).toBeTruthy();


    fixture.whenStable().then(() => {
    //   fixture.detectChanges();
      const btn = fixture.debugElement.queryAll(By.css('.class'))
      // debugger;
    // expect(btn[0].nativeElement.textContent).toEqual('contact Info')
    })
  }))
});
