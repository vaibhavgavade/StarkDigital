import React from 'react';
import Appstack from './route';
import {store} from './App/redux/store/index';
import {Provider} from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <Appstack />
    </Provider>
  );
};

export default App;
