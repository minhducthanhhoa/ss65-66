interface UserState {
    id: number;
    userName: string;
    gender: string;
    dateBirth: string;
    address: string;
  }
  
  interface Action {
    type: string;
    payload: UserState;
  }
  
  const initialState: UserState = {
    id: 1,
    userName: 'Nguyễn Văn Nam',
    gender: 'Nam',
    dateBirth: '20/03/2023',
    address: 'Thanh Xuân, Hà Nội',
  };
  
  const SET_USER = 'SET_USER';
  
  export const setUser = (user: UserState) => ({
    type: SET_USER,
    payload: user,
  });
  
  const userReducer = (state = initialState, action: Action): UserState => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  