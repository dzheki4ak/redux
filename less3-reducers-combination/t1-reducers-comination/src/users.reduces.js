import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initState = {
  usersList: [],
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    }

    case DELETE_USER:
      const newList = state.usersList.filter(
        user => user.id !== action.payload,
      );
      return {
        ...state,
        usersList: newList,
      };

    case UPDATE_USER:
      const updlist = state.usersList;
      return {
        ...state,
        usersList: updlist.map(user => {
          if (user.id === action.payload.userId) {
            return {
              ...user,
              ...action.payload.userData,
            };
          }
          return user;
        }),
      };

    default:
      return state;
  }
};

export default usersReducer;
