import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import reducers from './reducers';

import App from './components/App';

import './i18n';

const store = configureStore({
  reducer: reducers,
});

export default () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
