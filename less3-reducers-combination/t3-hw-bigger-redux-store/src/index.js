import store from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';

store.dispatch(setUser({id: 1, name: 'Ihor'}))
store.dispatch(setLanguage('ua'))
store.dispatch(addProduct({id: 1, name: 'milk'}))

console.log(store.getState());
