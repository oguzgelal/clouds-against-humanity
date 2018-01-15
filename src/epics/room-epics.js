import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as types from '../config/types';
import {
  createRoomCompleted,
  createRoomFailed,
  fetchRoomsCompleted,
  fetchRoomsFailed
} from '../actions/room-actions';

export const createRoomEpic = (action$, store) => {
  return action$
    .filter(action => action.type === types.CREATE_ROOM_STARTED)
    .mergeMap(action => {
      const eventID = action.ws.send(types.CREATE_ROOM_STARTED, action.data);
      return action.ws.observable()
        .map(data => {
          // react to the expected event on this subscription
          if (data.id === eventID) {
            if (data.type === types.CREATE_ROOM_COMPLETED) {
              return createRoomCompleted(data.data);
            } else if (data.type === types.CREATE_ROOM_FAILED) {
              return createRoomFailed(data.data)
            }
          }
          // return an empty action to keep the stream going
          else {
            return { type: 'IGNORE' }
          }
        });
    })
}

export const fetchRoomsEpic = (action$, store) => {
  return action$
    .filter(action => action.type === types.FETCH_ROOMS_STARTED)
    .mergeMap(action => {
      const eventID = action.ws.send(types.FETCH_ROOMS_STARTED, action.data);
      return action.ws.observable()
        .map(data => {
          // react to the expected event on this subscription
          if (data.id === eventID) {
            if (data.type === types.FETCH_ROOMS_COMPLETED) {
              return fetchRoomsCompleted(data.data);
            } else if (data.type === types.FETCH_ROOMS_FAILED) {
              return fetchRoomsFailed(data.data)
            }
          }
          // return an empty action to keep the stream going
          else {
            return { type: 'IGNORE' }
          }
        });
    })
}
