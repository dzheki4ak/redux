import { ADD_PRODUCT, DEL_PRODUCT } from './cart.actions';

const initState = {
  products: [],
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };

    case DEL_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          prod => prod.id !== action.payload,
        ),
      };

    default:
      return state;
  }
};
