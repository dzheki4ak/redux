import { ADDITION, DELETION } from './users.actions';

const initialState = {
  usersList: [],
};

const userReducer = (state = initialState, action) => {

  switch (action.type) {

    case ADDITION:
      return { 
        usersList: state.usersList.concat(action.payload)
      };

    case DELETION:
      return {
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };

    default:
      return state;
  }
};

export default userReducer;
