import React from 'react';
import BooksList from '../Component/bookList';
import BookAdd from '../Component/addBook';

const BooksPage = () => (
  <div>
    {/* <h2>Books Page</h2> */}
    <BooksList />
    <BookAdd />
  </div>
);

export default BooksPage;
