import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
    private books: Book[] = [
        {id:1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        isbn: '9780743273565',
        publishedYear: 1925,
        isAvailable: true
        }
    ]
    //mencari semua databuku
    findAll(): Book[]{
        return this.books;
    }

    //menambahkan data buku baru
    create(book:CreateBookDto): Book{
        const newBook: Book = {
            id: this.books.length + 1,
            title: book.title,
            author: book.author,
            isbn: book.isbn,
            publishedYear: book.publishedYear,
            isAvailable: true
        };
        this.books.push(newBook);
        return newBook;
    }

    findById(id: string): Book | undefined {
  return this.books.find(book => book.id === Number(id));
}


    
}
