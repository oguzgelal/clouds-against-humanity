import { ofType } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as types from '../config/types';
import { createRoom, createRoomCompleted, createRoomFailed } from '../actions/room-actions';

export const createRoomEpic = (action$, store) => {
  return action$
    .ofType(types.CREATE_ROOM_STARTED)
    .mergeMap(action => {
      const eventType = 'create-room';
      const eventID = action.ws.send(eventType, action.data);
      return action.ws.observable()
        .map(data => {
          // react to the expected event on this subscription
          if (data.id === eventID) {
            if (data.type === `${eventType}.success`) {
              return createRoomCompleted(data.data);
            } else if (data.type === `${eventType}.error`) {
              return createRoomFailed(data.data)
            }
          }
        });
    })
}
