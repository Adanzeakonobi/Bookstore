import React from 'react';
import Book from './book';

const BooksList = () => {
  const books = [
    {
      id: 1,
      name: 'Ada the pretty girl',
      category: 'Sci-Fi',
      author: 'Adaobi Okoye',
    },
    {
      id: 2,
      name: 'Ada the pretty girl',
      category: 'Sci-Fi',
      author: 'Adaobi Okoye',
    },
    {
      id: 3,
      name: 'Ada the pretty girl',
      category: 'Sci-Fi',
      author: 'Adaobi Okoye',
    },
    {
      id: 4,
      name: 'Ada the pretty girl',
      category: 'Sci-Fi',
      author: 'Adaobi Okoye',
    },
  ];

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
