import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { getBook } from '../redux/books/books';

const BooksList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, []);
  const books = useSelector((state) => state.book);

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
