import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'react-router-redux';
import { rootReducer } from '../reducers';
import { rootEpic } from '../epics';
import { createEpicMiddleware } from 'redux-observable';
import history from './history';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStoreProd = initialState => {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [
    reactRouterMiddleware,
    epicMiddleware
  ];
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares)
  )
  );
}

const configureStoreDev = initialState => {
  const reactRouterMiddleware = routerMiddleware(history);
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewares = [
    reduxImmutableStateInvariant(),
    reactRouterMiddleware,
    epicMiddleware
  ];
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares)
  )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
export default configureStore;
