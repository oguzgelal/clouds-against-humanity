// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user-reducer';
import loadingsReducer from './loadings-reducer';
import socketReducer from './socket-reducer';

export const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  loadings: loadingsReducer,
  socket: socketReducer
});
