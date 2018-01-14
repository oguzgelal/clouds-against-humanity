import * as types from '../config/types';
import initialState from '../config/initial-state';

const loadingsReducer = (state = initialState.loadings, action) => {
  switch (action.type) {

    // Logging in
    case types.FB_LOGIN_STARTED:
      return Object.assign({}, state, { fbLogin: true })
    case types.FB_LOGIN_COMPLETED:
      return Object.assign({}, state, { fbLogin: false })
    case types.FB_LOGIN_FAILED:
      return Object.assign({}, state, { fbLogin: false })

    // Fetching a room
    case types.FETCH_ROOMS_STARTED:
      return Object.assign({}, state, { rooms: true })
    case types.FETCH_ROOMS_COMPLETED:
      return Object.assign({}, state, { rooms: false })
    case types.FETCH_ROOMS_FAILED:
      return Object.assign({}, state, { rooms: false })

    // Creating a room
    case types.CREATE_ROOM_STARTED:
      return Object.assign({}, state, { createRoom: true })
    case types.CREATE_ROOM_COMPLETED:
      return Object.assign({}, state, { createRoom: false })
    case types.CREATE_ROOM_FAILED:
      return Object.assign({}, state, { createRoom: false })

    default:
      return state;
  }
}

export default loadingsReducer;
