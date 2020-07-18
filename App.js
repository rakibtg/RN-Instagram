import React from 'react';
import Router from './router';
import { store } from './store';
import { Provider } from 'react-redux';

if(__DEV__) {
  console.disableYellowBox = true;
}

export default function App () {
  return <Provider store={store}>
    <Router />
  </Provider>
}