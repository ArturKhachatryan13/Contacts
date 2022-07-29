import React from 'react';

import NavigationRoot from './src/Navigation';
import { Provider } from 'react-redux';
import { store } from './src/store/index';
import { useSelector } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <NavigationRoot />
    </Provider>
  );
}

export default App;
