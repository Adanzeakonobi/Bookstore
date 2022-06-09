/* eslint-disable camelcase */
// import { object } from 'prop-types';

// const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BbK8z59qXzWwp214YswA/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const GET_BOOK_SUCCESS = 'bookStore/books/GET_BOOK_SUCCESS';
const GET_BOOK_LOADING = 'bookStore/books/GET_BOOK_LOADING';
const GET_BOOK_FAILURE = 'bookStore/books/GET_BOOK_FAILURE';

const initialState = {
  book: [],
  loading: false,
  error: null,
};

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
// export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const getBookSuccess = (books) => ({ type: GET_BOOK_SUCCESS, payload: books });
export const getBookLoading = () => ({ type: GET_BOOK_LOADING });
export const getBookFailure = (errMessage) => ({ type: GET_BOOK_FAILURE, payload: errMessage });

export const addNewBook = (payload) => async (dispatch) => (
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BbK8z59qXzWwp214YswA/books', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  })
    .then((response) => response.ok)
    .then((data) => {
      if (data) {
        dispatch({ type: ADD_BOOK, payload });
      }
    })
);

export const deleteBook = (id) => async (dispatch) => (
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BbK8z59qXzWwp214YswA/books/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.text())
    .then(dispatch({ type: REMOVE_BOOK, id }))
);

export const getBook = () => async (dispatch) => (
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BbK8z59qXzWwp214YswA/books')
    .then((response) => response.json())
    .then((payload) => {
      const obj = Object.entries(payload);
      const books = obj.map(([item_id, value]) => {
        const [book] = value;
        return { ...book, item_id };
      });
      dispatch({ type: GET_BOOKS, books });
    })
);

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        book: action.payload,
      };
    case GET_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
        loading: false,
        book: [...state.book, action.payload],
      };
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload);
    default: return state;
  }
};

export default booksReducer;
