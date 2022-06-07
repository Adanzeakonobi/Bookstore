import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const statusCheckEventHandler = () => {
    dispatch(statusCheck());
  };

  const status = useSelector((state) => state.categories);

  return (
    <>
      <button type="button" onClick={statusCheckEventHandler}>
        Check status
      </button>
      <div>{status}</div>
    </>
  );
};

export default Categories;