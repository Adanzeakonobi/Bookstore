import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { id, name, author } = props;
  return (
    <li className="list-item" key={id}>
      <p>{name}</p>
      <p>{author}</p>
      <button type="button">Remove book</button>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.func.isRequired,
  name: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
};

export default Book;
