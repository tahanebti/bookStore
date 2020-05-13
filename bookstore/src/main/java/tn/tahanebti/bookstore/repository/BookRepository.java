package tn.tahanebti.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.tahanebti.bookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

	
}
