import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  apiUrl = '';
  constructor(private http: HttpClient) { }

  // this is for list API call ignore below commented code

  getPostWithObs(): Observable<any> {
    // if(search == ''){
    //   this.apiUrl = 'https://dummyjson.com/products';
    // }else{
    //   this.apiUrl = `https://dummyjson.com/products/search?q=${search}`;
    // }
    this.apiUrl = 'https://dummyjson.com/products';
    
    // return this.http.get(apiUrl,{ headers });
    return this.http.get(this.apiUrl);
  }

  // this is for details API
  getDetails(id: number) {
    const apiUrl = 'https://dummyjson.com/products/' + id;
    return this.http.get(apiUrl);
  }
}
