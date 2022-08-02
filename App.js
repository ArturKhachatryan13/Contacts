import React from 'react';

import NavigationRoot from './src/Navigation';

import { Provider } from 'react-redux';
import { store } from './src/Configs/configure-store';

function App() {
  return (
    <Provider store={store}>
      <NavigationRoot />
    </Provider>
  );
}

export default App;
