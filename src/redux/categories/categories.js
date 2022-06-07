const STATUS_CHECK = 'bookstore/books/STATUS_CHECK';

const initialState = [];

export const statusCheck = () => ({ type: STATUS_CHECK });

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECK:
      return 'Under construction';
    default: return state;
  }
};

export default categoriesReducer;
