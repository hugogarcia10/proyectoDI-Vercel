import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // creo array con los datos de la correspondientes

  constructor(private httpClient: HttpClient) { }

  url = 'https://dummyjson.com/posts/';
  urlSearch = 'https://dummyjson.com/posts/search?q=';
  // tantos metodos como consulatas quiera hacer a la api
  getAllPost(): Observable<any> {
    return this.httpClient.get(this.url);
  } 

    /* getAllPost(): any {
      this.httpClient.get(this.url).subscribe((data) => {
        return data
      })
    } */

  getPostById(id: number): Observable<any> {
    return this.httpClient.get(`${this.url}${id}`);
  }

  getPostSearch(query: string): Observable<any> {
    return this.httpClient.get(`${this.urlSearch}${query}`);
  }
}
