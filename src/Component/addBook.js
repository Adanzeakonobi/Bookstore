import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/books';
import './style/addbook.css';

const BookAdd = () => {
  const dispatch = useDispatch();
  const [book, changeBook] = useState({ item_id: '', title: '', author: '' });

  const updateTitle = (e) => {
    changeBook({
      ...book,
      title: e.target.value,
    });
  };

  const updateAuthor = (e) => {
    changeBook({
      ...book,
      author: e.target.value,
    });
  };

  const updateCategory = (e) => {
    changeBook({
      ...book,
      category: e.target.value,
    });
  };

  const addEventBookHandler = (e) => {
    e.preventDefault();
    const { title, author, category } = e.target.elements;
    const newBook = {
      item_id: uuidv4(),
      title: title.value,
      author: author.value,
      category: category.value,
    };
    dispatch(addNewBook(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div className="addingBook">
      <h3>Register new books</h3>
      <form className="add-form" onSubmit={addEventBookHandler}>
        <input type="text" id="title" name="title" placeholder="Book title.." onChange={updateTitle} required />
        <input type="text" id="author" name="author" placeholder="Author.." onChange={updateAuthor} required />
        <select id="category" onChange={updateCategory} required>
          <option value="">Select Category</option>
          <option value="Action">Action</option>
          <option value="Sci-fi">Sci-fi</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookAdd;
