import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { URI } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LogearService {

  constructor(private http: HttpClient) {
  }

  url = `${URI}/login`;


  logear(email) {
    return this.http.post(this.url, email);
  }

  estaLogueado() {
    return ( localStorage.getItem('token') ) ? true : false;
  }
}
