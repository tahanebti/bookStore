import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface GetResponse{
  _embedded:{
    books: any[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any>{
    return this.http.get<GetResponse>('http://localhost:8080/api/v1/books').pipe(
      map(resp => resp._embedded.books)
    )
  }

}
