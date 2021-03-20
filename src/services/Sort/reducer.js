const UPDATE_SORT = 'UPDATE_SORT';

const initialState = {
  type: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SORT:
      return {
        ...state,
        type: action.payload
      };
    default:
      return state;
  }
}
