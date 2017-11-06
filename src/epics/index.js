import { combineEpics } from 'redux-observable';
import * as loginEpics from './login-epics';

export const rootEpic = combineEpics(
  loginEpics.fbLoginStartEpic
);
