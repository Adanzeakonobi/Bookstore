import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

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
