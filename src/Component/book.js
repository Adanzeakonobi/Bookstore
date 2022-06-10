import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import Progress from './Progress';
import './style/book.css';

const Book = (props) => {
  const {
    id, title, author, category,
  } = props;

  const dispatch = useDispatch();

  const removeEventHandler = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="list-item" key={id}>
        <h4>{category}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div className="btn-container">
          <button className="commentbtn" type="button">
            Comments
          </button>
          <button type="button" onClick={removeEventHandler}>Remove book</button>
          <button className="editbtn" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="bookProgressSection">
        <Progress />
        <div className="currentChapterSection">
          <h2>CURRENT CHAPTER</h2>
          <h3>Chapter 3: &quot;A Lesson Learned&quot;</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.func.isRequired,
  category: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
};

export default Book;
