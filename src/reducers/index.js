// Set up your root reducer here...
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';
import loadingsReducer from './loadingsReducer';

export const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  loadings: loadingsReducer
});
