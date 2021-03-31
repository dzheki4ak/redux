import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { wetherReducer } from './weather/weather.reducer';

const activeReducer = combineReducers({ weather: wetherReducer });

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const weatherStore = createStore(
  activeReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default weatherStore;