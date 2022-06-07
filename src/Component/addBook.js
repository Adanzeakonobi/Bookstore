import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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

  const addEventBookHandler = (e) => {
    e.preventDefault();
    const { title, author } = e.target.elements;
    const newBookObj = {
      title: title.value,
      author: author.value,
    };
    dispatch(addBook(newBookObj));
  };


return (
  <div>
    <h3>Register new books</h3>
    <form className="add-form" onSubmit={addEventBookHandler}>
      <input type="text" name="title" placeholder="Book title.." onChange={changeTitle}/>
      <input type="text" name="author" placeholder="Author.." onChange={changeAuthor} />
      <button type="submit">Add Book</button>
    </form>
  </div>
);
}



export default BookAdd;
