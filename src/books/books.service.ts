import { HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { resourceUsage } from 'process';

@Injectable()
export class BooksService {
  books = [
    {
      id: 1,
      title: 'First Book',
      description: 'This is test',
      author: 'olususi Oluyemi',
    },
    {
      id: 2,
      title: 'First Book',
      description: 'This is test',
      author: 'olususi Oluyemi',
    },
  ];
  getBooks(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.books);
    });
  }
  getBook(bookID): Promise<any> {
    const id = Number(bookID);
    return new Promise((resolve) => {
      const book = this.books.find((book) => book.id === id);
      if (!book) {
        throw new HttpException('Book does not exist!', 404);
      }
      resolve(book);
    });
  }
  addBook(book): Promise<any> {
    return new Promise((resolve) => {
      this.books.push(book);
      resolve(this.books);
    });
  }
  deleteBook(bookID): Promise<any> {
    const id = Number(bookID);
    return new Promise((resolve) => {
      const index = this.books.findIndex((book) => book.id === id);
      if (index === -1) {
        throw new HttpException('Book does not exist!', 404);
      }
      this.books.splice(1, index);
      resolve(this.books);
    });
  }
}
