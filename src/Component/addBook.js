import React from 'react';

const BookAdd = () => (
  <div>
    <h2>Register new books</h2>
    <form className="register-form">
      <input type="text" name="title" placeholder="Book title.." />
      <input type="text" name="author" placeholder="Author.." />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default BookAdd;
