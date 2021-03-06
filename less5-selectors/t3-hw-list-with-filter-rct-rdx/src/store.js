import usersReducer from './Users/users.reducer';
import { createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default store;
