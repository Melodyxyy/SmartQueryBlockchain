// src/redux/reducers/searchReducer.ts
interface SearchState {
  query: string;
}

const initialState: SearchState = {
  query: '',
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
