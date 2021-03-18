import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';

console.log(store.getState());
