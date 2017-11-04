import * as types from '../constants/typesLogin';
import initialState from '../constants/initialState';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {

    case types.FB_LOGIN_COMPLETED:
      return {
        ...state,
        user: Object.assign({}, action.data)
      }

    default:
      return state;
  }
}

export default userReducer;
