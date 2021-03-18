import { USER_ADD, USER_DEL } from './user.actions';



export const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_ADD:
      return {
        user: action.payload,
      };

    case USER_DEL:
      return {
        user: null,
      };

    default:
      return state;
  }
};
