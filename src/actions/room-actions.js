import * as types from '../config/types';
import history from '../config/history';
import Toast from '../components/common/toast/toast';

export const createRoom = (ws, data) => {
  return { type: types.CREATE_ROOM_STARTED, ws, data }
}

export const createRoomCompleted = () => {
  return {
    type: types.CREATE_ROOM_COMPLETED
  }
}

export const createRoomFailed = () => {
  return {
    type: types.CREATE_ROOM_FAILED
  }
}

export const fetchRooms = () => {
  return {
    type: types.FETCH_ROOMS_STARTED
  }
}

export const fetchRoomsCompleted = () => {
  return {
    type: types.FETCH_ROOMS_COMPLETED
  }
}

export const fetchRoomsFailed = () => {
  new Toast('Cannot fetch games', 'error')
  return {
    type: types.FETCH_ROOMS_FAILED
  }
}
