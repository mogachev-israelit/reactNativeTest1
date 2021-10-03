import React from 'react';
import AppNavigator from './src/navigations/AppNavigator';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { store } from './src/store';
enableScreens(false);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;