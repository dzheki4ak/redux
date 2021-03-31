import React from 'react';
import Weather from './weather/Weather';
import weatherStore from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store = {weatherStore}>
      <Weather />
    </Provider>
  );
};

export default App;
