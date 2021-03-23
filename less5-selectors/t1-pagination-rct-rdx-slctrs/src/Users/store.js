import { createStore, combineReducers } from 'redux';
import { userPageReducer, userListReducer } from './users.reducer';

const reducer = combineReducers({
  users: userListReducer,
  currentPage: userPageReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

