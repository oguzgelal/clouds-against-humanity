// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { persistReducer } from 'redux-persist';
import userReducer from './user-reducer';
import loadingsReducer from './loadings-reducer';
import socketReducer from './socket-reducer';
import localForage from 'localforage';

const userPersistConfig = {
  key: 'user',
  storage: localForage
};

export const rootReducer = combineReducers({
  routing: routerReducer,
  user: persistReducer(userPersistConfig, userReducer),
  loadings: loadingsReducer,
  socket: socketReducer
});
