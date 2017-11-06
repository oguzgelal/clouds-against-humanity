import * as types from '../config/types';
import initialState from '../config/initial-state';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {

    case types.FB_LOGIN_COMPLETED:
      return Object.assign({}, action.data);

    default:
      return state;
  }
}

export default userReducer;
