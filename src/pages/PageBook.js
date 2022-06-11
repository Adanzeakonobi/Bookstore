import React from 'react';
import BooksList from '../Component/bookList';
import BookAdd from '../Component/addBook';

const BooksPage = () => {
  const hrStyle = {
    marginTop: '2rem',
    marginBottom: '1.8rem',
    border: '1.5px solid var(--grey-border)',
  };

  return (
    <div className="pageBody">
      {/* <h2>Books Page</h2> */}
      <BooksList />
      <hr style={hrStyle} />
      <BookAdd />
    </div>
  );
};

export default BooksPage;
