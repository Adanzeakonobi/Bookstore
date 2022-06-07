import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categories from './categories/categories';

const reducer = combineReducers({ booksReducer, categories });

const store = configureStore(
  reducer,
);

export default store;
