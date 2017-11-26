/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './config/store';
import history from './config/history';
import initialState from './config/initial-state'
import App from './app';
import { initExternalLibs, initFacebookApi } from './utils/misc';

import './styles/index.scss';
require('./assets/favicon.ico');

initExternalLibs();
initFacebookApi();

const { persistor, store } = configureStore(initialState);

render(
  <PersistGate persistor={persistor}>
    <AppContainer>
      <App store={store} history={history} />
    </AppContainer>
  </PersistGate>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NewApp = require('./app').default;
    render(
      <PersistGate persistor={persistor}>
        <AppContainer>
          <NewApp store={store} history={history} />
        </AppContainer>
      </PersistGate>,
      document.getElementById('app')
    );
  });
}
