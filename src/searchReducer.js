const initialState = {
  searchTerm: '',
  searchRes: [],
};

export default function searchReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_SEARCH_RESULT':
      return {
        ...state,
        searchTerm: action.searchTerm,
        searchRes: [...action.searchRes],
      };

    default:
      return state;
  }
}