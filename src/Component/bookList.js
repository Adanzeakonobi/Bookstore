import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul className="listBooks">
        {books && books.map((book) => (
          <li className="bookItem" key={book.id}>
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
