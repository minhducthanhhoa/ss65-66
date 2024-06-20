interface UserState {
    id: number;
    userName: string;
    gender: string;
    dateBirth: string;
    address: string;
  }
  
  interface Action {
    type: string;
    payload: UserState[];
  }
  
  const initialState: UserState[] = [
    {
      id: 1,
      userName: 'Nguyễn Văn A',
      gender: 'Nam',
      dateBirth: '20/11/2023',
      address: 'Thanh Xuân, Hà Nội',
    },
    {
      id: 2,
      userName: 'Nguyễn Thị B',
      gender: 'Nữ',
      dateBirth: '20/11/2023',
      address: 'Cầu Giấy, Hà Nội',
    },
  ];
  
  const SET_USERS = 'SET_USERS';
  
  export const setUsers = (users: UserState[]) => ({
    type: SET_USERS,
    payload: users,
  });
  
  const usersReducer = (state = initialState, action: Action): UserState[] => {
    switch (action.type) {
      case SET_USERS:
        return action.payload;
      default:
        return state;
    }
  };
  
  export default usersReducer;
  