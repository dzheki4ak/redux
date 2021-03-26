export const FILTER_USER = 'USERS/FILTER';

export const userFilter = text => {
  return {
    type: FILTER_USER,
    payload: {text},
  };
};
