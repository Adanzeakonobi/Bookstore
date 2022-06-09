import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNewBook } from '../redux/books/books';

const BookAdd = () => {
  const dispatch = useDispatch();
  const [book, changeBook] = useState({ title: '', author: '' });

  const changeTitle = (e) => {
    changeBook({
      ...book,
      title: e.target.value,
    });
  };

  const changeAuthor = (e) => {
    changeBook({
      ...book,
      author: e.target.value,
    });
  };

  const changeCategory = (e) => {
    changeBook({
      ...book,
      Category: e.target.value,
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
    }
    // const newBookObj = {
    //   title: title.value,
    //   author: author.value,
    // };
    dispatch(addNewBook(newBook));
    title.value = '';
    author.value = '';
    category.value = '';
  };

  return (
    <div>
      <h3>Register new books</h3>
      <form className="add-form" onSubmit={addEventBookHandler}>
        <input type="text" name="title" placeholder="Book title.." onChange={changeTitle} required />
        <input type="text" name="author" placeholder="Author.." onChange={changeAuthor} required />
        <input type="text" name="Category" placeholder="Category.." onChange={changeCategory} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookAdd;
