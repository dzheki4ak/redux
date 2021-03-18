import { store } from './store';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';

store.dispatch(setUser({name: 'Ihor'}))
store.dispatch(addProduct({id:1, name: 'Milk'}))
store.dispatch(setLanguage('UA'))
console.log(store.getState());
