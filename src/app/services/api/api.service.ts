import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  getHome() {
    return this.http.get(this.apiUrl + 'home').toPromise().then(res => {
      return res;
    });
  }


  getAd(slug: string) {
    return this.http.get(this.apiUrl + 'ad/' + slug).toPromise().then(res => {
      return res;
    });
  }


  getCollection(slug: string) {
    return this.http.get(this.apiUrl + 'collections/' + slug).toPromise().then(res => {
      return res;
    });
  }

  getProductionHouse(slug: string) {
    return this.http.get(this.apiUrl + 'production-house/' + slug).toPromise().then(res => {
      return res;
    });
  }


  search(q: string) {
    return this.http.get(this.apiUrl + 'search/' + q).toPromise().then(res => {
      return res;
    });
  }
  

  


}
