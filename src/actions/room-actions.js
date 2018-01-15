import * as types from '../config/types';
import history from '../config/history';
import Toast from '../components/common/toast/toast';

export const createRoom = (ws, data) => {
  return { type: types.CREATE_ROOM_STARTED, ws, data }
}

export const createRoomCompleted = () => {
  new Toast('Room successfully created', 'success')
  return { type: types.CREATE_ROOM_COMPLETED }
}

export const createRoomFailed = () => {
  return { type: types.CREATE_ROOM_FAILED }
}

export const fetchRooms = ws => {
  return { type: types.FETCH_ROOMS_STARTED, ws }
}

export const fetchRoomsCompleted = data => {
  return { type: types.FETCH_ROOMS_COMPLETED, data }
}

export const fetchRoomsFailed = () => {
  new Toast('Cannot fetch rooms', 'error')
  return { type: types.FETCH_ROOMS_FAILED }
}
