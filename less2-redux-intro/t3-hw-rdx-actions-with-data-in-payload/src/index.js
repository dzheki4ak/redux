import { store } from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.dispatch(addUser({ id: 1, name: 'Nixto' }));
store.dispatch(addUser({ id: 2, name: 'Xtos' }));
store.dispatch(addUser({ id: 3, name: 'Man' }));

store.dispatch(deleteUser(1));

console.log(store.getState());
