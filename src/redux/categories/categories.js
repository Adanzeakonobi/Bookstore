const STATUS_CHECK = 'bookstore/pageCatego/STATUS_CHECK';

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
