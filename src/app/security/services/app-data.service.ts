import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class AppDataService {
  constructor(private http: AuthHttp) {
  }

  getCities() {
    return this.http.get('/p/products').map(res => res.json());
  }

  getUsers() {
    return this.http.get('/p/products').map(res => res.json());
  }
}
