import store from './store';

import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.dispatch(increment());
store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Bob' }));
store.dispatch(addUser({ id: 3, name: 'Ben' }));
store.dispatch(updateUser(3, { id: 3, name: 'Hard' }));


store.dispatch(deleteUser(3));


console.log(store.getState());
