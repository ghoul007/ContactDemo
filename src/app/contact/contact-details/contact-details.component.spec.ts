import { ContactDetailsComponent } from "./contact-details.component";

describe("Contact Details", () => {
  let detailsComponent: ContactDetailsComponent;
  beforeEach(() => {
    detailsComponent = new ContactDetailsComponent();

  });
  it('first 1+1', () => {
    expect(1 + 1).toEqual(2)
  })
  it('exit Component', () => {
    expect(detailsComponent).toBeTruthy();
  })

  it('have a field', () => {
    expect(detailsComponent.title).toEqual("ahmed");
  });
})


// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { ContactDetailsComponent } from './contact-details.component';

// describe('ContactDetailsComponent', () => {
//   let component: ContactDetailsComponent;
//   let fixture: ComponentFixture<ContactDetailsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ ContactDetailsComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ContactDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
