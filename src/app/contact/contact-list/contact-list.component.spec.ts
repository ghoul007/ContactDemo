import { ContactListComponent } from "./contact-list.component";
import { of } from "rxjs/observable/of";
import { timer } from "rxjs/observable/timer";
import { ContactService } from "../contact.service";
import { mapTo } from "rxjs/operators";

describe('contact List Component', () => {
  let contactListcomponent: ContactListComponent;
  const fakeContact = [{ name: "ahmed" }]
  // const fakeContacService = {
  //   getContact: () => of(fakeContact),
  //   getArticle: () => of([])
  // } as any;

  // const fakeContacService = jasmine.createSpyObj('contactService', ['getContact', 'getArticle']);

  const contacService = new ContactService(null);

  beforeEach(() => {
    contactListcomponent = new ContactListComponent(contacService);
  });

  it('Create Component', () => {
    expect(contactListcomponent).toBeTruthy();
  });


  it('check service', () => {
    const spyContact = spyOn(contacService, 'getContact').and.returnValue(of(fakeContact));
    const spyArticle = spyOn(contacService, 'getArticle').and.returnValue(of([]));
    // const spyContact = fakeContacService.getContact.and.returnValue(of(fakeContact))
    // const spyArticle = fakeContacService.getArticle.and.returnValue(of([]))
    contactListcomponent.ngOnInit();
    expect(contactListcomponent.contacts).toEqual(fakeContact)
    expect(spyContact).toHaveBeenCalled();
    expect(spyContact).toHaveBeenCalledWith();
    // expect(spyArticle).toHaveBeenCalled();
    // expect(spyArticle).toHaveBeenCalledWith();
  });


  it('check service async', (done) => {
    //   var originalTimeout;
    //   beforeEach(function() {
    //     originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // });
    const spyContact = spyOn(contacService, 'getContact').and.returnValue(timer(2000).pipe(mapTo([fakeContact])));
    const spyArticle = spyOn(contacService, 'getArticle').and.returnValue(of([]));
    // const spyContact = fakeContacService.getContact.and.returnValue(of(fakeContact))
    // const spyArticle = fakeContacService.getArticle.and.returnValue(of([]))
    contactListcomponent.ngOnInit();
    contacService.getContact().subscribe(res => {
      expect(res).toEqual([fakeContact])
      done();

    })

    // spyContact.subscribe(res => {
    // expect(spyContact).toHaveBeenCalled();
    // expect(spyContact).toHaveBeenCalledWith();
    // })
    // expect(spyArticle).toHaveBeenCalled();
    // expect(spyArticle).toHaveBeenCalledWith();
  });

});




import { async, ComponentFixture, TestBed, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClient } from "@angular/common/http";


describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let contactService: ContactService;
  const fakeContact = [{ name: "ahmed" }]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ContactService, { provide: HttpClient, useValue: {} }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListComponent);
    contactService = TestBed.get(ContactService);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('check service async', fakeAsync(() => {
    const spyContact = spyOn(contactService, 'getContact').and.returnValue(timer(2000).pipe(mapTo([fakeContact])));
    const spyArticle = spyOn(contactService, 'getArticle').and.returnValue(of([]));
    component.ngOnInit();
    contactService.getContact().subscribe(res => {
      expect(res).toEqual([fakeContact])
    })

    tick(2000)
    discardPeriodicTasks()
  }));


});
