import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;

  const dispatch = useDispatch();

  const removeEventHandler = () => {
    dispatch(removeBook(id));
  };

  return (
    <li className="list-item" key={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={removeEventHandler}>Remove book</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
};

export default Book;
