import React from 'react';
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import reducer from './slices';

import App from './components/App';

import './i18n';

const store = configureStore({
  reducer,
});

export default () => {
  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>,
    document.getElementById('root'),
  );
};
