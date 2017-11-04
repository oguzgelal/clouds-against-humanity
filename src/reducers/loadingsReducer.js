import * as types from '../constants/typesLogin';
import initialState from '../constants/initialState';

const loadingsReducer = (state = initialState.loadings, action) => {
  switch (action.type) {

    case types.FB_LOGIN_STARTED:
      return { fbLogin: true }

    case types.FB_LOGIN_COMPLETED:
      return { fbLogin: false }

    default:
      return state;
  }
}

export default loadingsReducer;
