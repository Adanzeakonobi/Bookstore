// Actions
const STATUS_CHECK = 'STATUS_CHECK';

// Action Creators
export const statusCheck = () => ({ type: STATUS_CHECK });

// Reducer
const categories = (state = [], action) => {
  switch (action.type) {
    // do reducer stuff
    case STATUS_CHECK:
      return 'Under construction';
    default: return state;
  }
};

export default categories;
