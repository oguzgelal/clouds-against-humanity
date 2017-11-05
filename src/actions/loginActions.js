import * as types from '../constants/typesLogin';
import Toast from '../components/common/toast/Toast';

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
  new Toast('Uh, that didn\'t work', 'error')
  return {
    type: types.FB_LOGIN_FAILED,
    err
  }
}
