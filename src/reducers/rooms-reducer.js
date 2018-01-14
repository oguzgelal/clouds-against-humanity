import * as types from '../config/types';
import initialState from '../config/initial-state';

const roomsReducer = (state = initialState.rooms, action) => {
  switch (action.type) {

    case types.FETCH_ROOMS_COMPLETED:
      return Object.assign({}, action.data);

    default:
      return state;
  }
}

export default roomsReducer;
