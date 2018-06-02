import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators/map";
@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {

  }

  getContact() {
    return this.http.get('./assets/Contact.json', { 'withCredentials': true, responseType: 'json' })
      .pipe(map(res => Object.values(res['Data'])))
  }

  getArticle() {
    return this.http.get('./assets/Article.json', { 'withCredentials': true, responseType: 'json' })
      .pipe(map(res => Object.values(res['Data'])))
  }

}
