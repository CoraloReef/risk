import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';

import reducers from './reducers';
import translationsObject from './translations.json';

import App from './components/App';

const store = configureStore({
  reducer: reducers,
});

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('ru'));

export default () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};
