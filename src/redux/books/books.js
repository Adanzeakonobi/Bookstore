// Actions
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// Action Creators
export const addBook = (book) => ({ type: ADD_BOOK, payload: book });
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: { id } });

// Reducer
const books = (state = [], action) => {
  switch (action.type) {
    // do reducer stuff
    case ADD_BOOK:
      return [...state, {
        id: state.length,
        name: action.payload.name,
        author: action.payload.author,
      }];
    case REMOVE_BOOK:
      return state.filter((books) => books.id !== action.payload.id);
    default: return state;
  }
};

export default books;
