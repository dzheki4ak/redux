export const USER_ADD = 'USERS/ADD_USER';
export const USER_DEL = 'USERS/DEL_USER';

export const setUser = userData => {
  return {
    type: USER_ADD,
    payload: userData,
  };
};

export const removeUser = () => {
  return {
    type: USER_DEL,
  };
};




