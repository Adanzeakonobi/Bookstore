import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './book';
import { getBook } from '../redux/books/books';

const BooksList = () => {
  const { books, loading } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  if (loading) return <h3>loading...</h3>;

  return (
    <div>
      <ul className="listBooks">
        {books && books.map((book) => (
          <li className="bookItem" key={book.item_id}>
            <Book
              id={book.item_id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
