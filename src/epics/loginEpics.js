import * as types from '../constants/typesLogin';
import { ofType } from 'redux-observable';
import 'rxjs';

export const fbLoginStartEpic = action$ => {
  return action$
    .ofType(types.FB_LOGIN_STARTED)
    .delay(1000)
    .mapTo({
      type: types.FB_LOGIN_COMPLETED,
      data: { bar: 'foo' }
    })
}
