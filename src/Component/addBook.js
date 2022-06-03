import React from 'react';

const BookAdd = () => (
  <div>
    <h3>Register new books</h3>
    <form className="add-form">
      <input type="text" name="title" placeholder="Book title.." />
      <input type="text" name="author" placeholder="Author.." />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BookAdd;
