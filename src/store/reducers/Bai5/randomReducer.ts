interface RandomNumberState {
    numbers: number[];
  }
  
  const initialState: RandomNumberState = {
    numbers: [],
  };
  
  const randomNumberReducer = (state = initialState, action: any): RandomNumberState => {
    switch (action.type) {
      case 'ADD_RANDOM_NUMBER':
        return {
          ...state,
          numbers: [...state.numbers, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default randomNumberReducer;
  