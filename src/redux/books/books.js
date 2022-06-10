const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BbK8z59qXzWwp214YswA/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const GET_BOOK_SUCCESS = 'bookStore/books/GET_BOOK_SUCCESS';
const GET_BOOK_LOADING = 'bookStore/books/GET_BOOK_LOADING';
const GET_BOOK_FAILURE = 'bookStore/books/GET_BOOK_FAILURE';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
// export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });
export const getBookSuccess = (books) => ({ type: GET_BOOK_SUCCESS, payload: books });
export const getBookLoading = () => ({ type: GET_BOOK_LOADING });
export const getBookFailure = (errMessage) => ({ type: GET_BOOK_FAILURE, payload: errMessage });

export const getBook = () => (dispatch) => {
  dispatch(getBookLoading());
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const clearedBook = [];
      Object.keys(data).forEach((key) => {
        if (key) {
          clearedBook.push({ ...data[key][0], item_id: key });
        }
      });
      dispatch(getBookSuccess(clearedBook));
    })
    .catch((err) => {
      dispatch(getBookFailure(err.Message));
    });
};

export const addNewBook = (newBook) => (dispatch) => {
  fetch(url, {
    method: 'POST',
    headers: { 'content-Type': 'Application/json' },
    body: JSON.stringify(newBook),
  }).then(() => {
    dispatch(addBook(newBook));
  });
};

export const deleteBook = (id) => (dispatch) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  }).then(() => {
    dispatch(getBook());
  });
};

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
        books: action.payload,
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
        books: [...state.books, action.payload],
      };
    // case REMOVE_BOOK:
    //   return state.filter((books) => books.id !== action.payload);
    default: return state;
  }
};

export default booksReducer;
