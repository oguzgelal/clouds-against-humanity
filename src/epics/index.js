import { combineEpics } from 'redux-observable';
import * as loginEpics from './login-epics';
import * as roomEpics from './room-epics';

export const rootEpic = combineEpics(
  loginEpics.fbLoginStartEpic,
  loginEpics.fbLoginCompletedEpic,
  roomEpics.createRoomEpic,
  roomEpics.fetchRoomsEpic,
);
