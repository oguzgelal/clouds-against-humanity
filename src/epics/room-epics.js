import * as types from '../config/types';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {
  createRoom,
  createRoomCompleted,
  createRoomFailed
} from '../actions/room-actions';

export const createRoomEpic = (action$, store) => {
  return action$
    .ofType(types.CREATE_ROOM_STARTED)
    .mergeMap(action => {
      console.log(action);
      const ws = action.ws;
      ws.send('create-room', action);
      return ws.observable();
    })
    .mergeMap(data => {
      console.log(data);
    })
}
