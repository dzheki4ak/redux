export const ADDITION = 'USER/ADDITION';
export const DELETION = 'USER/DELETION';

export const addUser = user => {
  return {
    type: ADDITION,
    payload: user,
  };
};

export const deleteUser = id => {
  return {
    type: DELETION,
    payload: id,
  };
};