// reducers/index.ts

import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  search: searchReducer,
  // Add other reducers here if needed
});

export default rootReducer;
