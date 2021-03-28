import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import usersReducer from './users.reduces';

const appReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(appReducer);

export default store;
