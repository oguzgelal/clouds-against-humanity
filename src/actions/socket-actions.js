import * as types from '../config/types';

export const socketConnecting = () => {
  return {
    type: types.SOCKET_CONNECTING
  }
}

export const socketConnection = () => {
  return {
    type: types.SOCKET_CONNECTION
  }
}

export const socketConnectionError = () => {
  return {
    type: types.SOCKET_CONNECTION_ERROR
  }
}

export const socketConnectionTimeout = () => {
  return {
    type: types.SOCKET_CONNECTION_TIMEOUT
  }
}

export const socketDisconnected = () => {
  return {
    type: types.SOCKET_DISCONNECTED
  }
}

export const socketReconnecting = () => {
  return {
    type: types.SOCKET_RECONNECTING
  }
}

export const socketReconnection = () => {
  return {
    type: types.SOCKET_RECONNECTION
  }
}

export const socketReconnectionFailed = () => {
  return {
    type: types.SOCKET_RECONNECTION_FAILED
  }
}
