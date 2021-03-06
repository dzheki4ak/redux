import React from 'react';
import { Provider } from 'react-redux';
import Users from './users/Users';

import { Provider } from 'react-redux';

import store from './';



const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
};

export default App;
