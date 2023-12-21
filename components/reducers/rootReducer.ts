// ./src/components/reducers/rootReducer.ts

import { combineReducers } from 'redux';
import searchReducer from './searchReducer'; 
import otherReducer from './otherReducer'; 

const rootReducer = combineReducers({
  search: searchReducer,
  other: otherReducer,
  // Add more reducers, each corresponding to a state property
});

export default rootReducer;
