export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const DEL_PRODUCT = 'CART/DEL_PRODUCT';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = id => {
  return {
    type: DEL_PRODUCT,
    payload: id,
  };
};
