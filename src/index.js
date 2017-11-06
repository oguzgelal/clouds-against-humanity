/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore from './config/store';
import history from './config/history';
import initialState from './config/initial-state'
import App from './components/app';
import { initExternalLibs, initFacebookApi } from './utils/misc';

import './styles/index.scss';
require('./favicon.ico');

initExternalLibs();
initFacebookApi();

const store = configureStore(initialState);

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NewApp = require('./components/app').default;
    render(
      <AppContainer>
        <NewApp store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
