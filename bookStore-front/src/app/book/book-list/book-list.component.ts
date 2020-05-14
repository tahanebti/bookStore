import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<any>

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.books$ = this.bookService.getBooks()
    this.books$.subscribe(books => console.log('books', books))
  }


}
