import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';

store.dispatch(setLanguage('jp'))

console.log(store.getState());
