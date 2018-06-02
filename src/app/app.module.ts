import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './layout/body/body.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact/contact-details/contact-details.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContactComponent,
    ContactListComponent,
    ContactDetailsComponent,
  ],
  imports: [
    FormsModule,
    NgxDatatableModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
