import { USER_ADD, USER_DEL } from './user.actions';

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_ADD:
      return action.payload;

    case USER_DEL:
      return null;
      
    default:
      return state;
  }
};
