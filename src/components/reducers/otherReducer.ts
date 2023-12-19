
// ./src/components/reducers/otherReducer.ts
interface ActionType {
  type: string;
  // If there are other fields, you can add them here
}

const initialState = {
  // Define initial state for other reducer
};

const otherReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    // Handle actions specific to otherReducer
    default:
      return state;
  }
};

export default otherReducer;
