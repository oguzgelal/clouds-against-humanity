import * as types from '../config/types';
import initialState from '../config/initial-state';

const loadingsReducer = (state = initialState.loadings, action) => {
  switch (action.type) {

    case types.FB_LOGIN_STARTED:
      return Object.assign({}, state, { fbLogin: true })

    case types.FB_LOGIN_COMPLETED:
      return Object.assign({}, state, { fbLogin: false })

    case types.FB_LOGIN_FAILED:
      return Object.assign({}, state, { fbLogin: false })

    default:
      return state;
  }
}

export default loadingsReducer;
