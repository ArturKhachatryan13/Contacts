import * as React from 'react';
import NavigationRoot from './src/Navigation';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/store/index';

function App() {
  return (
    <Provider store={store}>
      <NavigationRoot />
    </Provider>
  );
}

export default App;
