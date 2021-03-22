import React from 'react';
import UsersList from './Users/UsersList';

import { Provider } from 'react-redux';

import store from './Users/store';

const App = () => {
  return (
    <Provider store={store}>
      <UsersList />
    </Provider>
  );
};

export default App;
