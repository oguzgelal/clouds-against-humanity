import * as types from '../constants/typesLogin';

export const fbLoginClicked = () => {
  return {
    type: types.FB_LOGIN_STARTED
  }
}

export const fbLoginCompleted = data => {
  return {
    type: types.FB_LOGIN_COMPLETED,
    data
  }
}

export const fbLoginFailed = err => {
  return {
    type: types.FB_LOGIN_FAILED,
    err
  }
}
