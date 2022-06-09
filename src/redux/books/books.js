import { v4 as uuidv4 } from 'uuid';

const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BbK8z59qXzWwp214YswA/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const GET_BOOK_SUCCESS   = 'bookStore/books/GET_BOOK_SUCCESS';
const GET_BOOK_LOADING = 'bookStore/books/GET_BOOK_LOADING';
const GET_BOOK_FAILURE = 'bookStore/books/GET_BOOK_FAILURE';

const initialState = [
  {
    id: uuidv4(),
    title: 'Ada the pretty girl',
    category: 'Sci-Fi',
    author: 'Adaobi Okoye',
  },
  {
    id: uuidv4(),
    title: 'Ada the pretty girl',
    category: 'Sci-Fi',
    author: 'Adaobi Okoye',
  },
  {
    id: uuidv4(),
    title: 'Ada the pretty girl',
    category: 'Sci-Fi',
    author: 'Adaobi Okoye',
  },
  {
    id: uuidv4(),
    title: 'Ada the pretty girl',
    category: 'Sci-Fi',
    author: 'Adaobi Okoye',
  },
];

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const getBookSuccess = (book) => ({ type: GET_BOOK_SUCCESS, payload: book });
export const getBookLoading = () => ({ type: GET_BOOK_LOADING, });
export const getBookFailure = (errMessage) => ({ type: GET_BOOK_FAILURE, payload: errMessage });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload);
    default: return state;
  }
};

export default booksReducer;
