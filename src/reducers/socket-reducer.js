import * as types from '../config/types';
import initialState from '../config/initial-state';

const socketReducer = (state = initialState.loadings, action) => {
  switch (action.type) {

    case types.SOCKET_CONNECTING:
      return Object.assign({}, state, {
        connecting: true,
        connectionMessage: 'Connecting...'
      })

    case types.SOCKET_CONNECTION:
      return Object.assign({}, state, {
        connected: true,
        connecting: false,
        connectionMessage: 'Connected'
      })

    case types.SOCKET_CONNECTION_ERROR:
      return Object.assign({}, state, {
        connected: false,
        connecting: false,
        connectionMessage: 'Connection error'
      })

    case types.SOCKET_CONNECTION_TIMEOUT:
      return Object.assign({}, state, {
        connected: false,
        connecting: false,
        connectionMessage: 'Connection timed out'
      })

    case types.SOCKET_DISCONNECTED:
      return Object.assign({}, state, {
        connected: false,
        connecting: false,
        connectionMessage: 'Disconnected'
      })

    case types.SOCKET_RECONNECTING:
      return Object.assign({}, state, {
        connecting: true,
        connectionMessage: 'Attempting to reconnect...'
      })

    case types.SOCKET_RECONNECTION:
      return Object.assign({}, state, {
        connected: true,
        connecting: false,
        connectionMessage: 'Reconnected'
      })

    case types.SOCKET_RECONNECTION_FAILED:
      return Object.assign({}, state, {
        connected: false,
        connecting: false,
        connectionMessage: 'Reconnection attempt failed. Will keep trying.'
      })

    default:
      return state;
  }
}

export default socketReducer;
