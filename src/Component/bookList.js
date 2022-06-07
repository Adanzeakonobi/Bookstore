import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';

const BooksList = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul className="listBooks">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            name={book.name}
            author={book.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
