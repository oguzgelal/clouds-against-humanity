import { combineEpics } from 'redux-observable';
import * as loginEpics from './loginEpics';

export const rootEpic = combineEpics(
  loginEpics.fbLoginStartEpic
);
