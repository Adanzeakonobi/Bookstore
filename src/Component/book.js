import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const removeEventHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <li className="list-item" key={id}>
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={removeEventHandler}>Remove book</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.func.isRequired,
  category: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
};

export default Book;
