import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book.component';
import { BookService } from './shared/book.service';
import { BookListComponent } from './book-list/book-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: 'books', 
    component: BookComponent,
    children: [
       { path: '', component: BookListComponent },
      // { path: ':query/products', component: ProductSearchComponent },
    ]
  }
]
 

@NgModule({
  declarations: [BookComponent, BookListComponent],
  exports:[BookComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,

  ],
  providers:[BookService]
})
export class BookModule { }
