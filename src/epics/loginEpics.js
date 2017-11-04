import * as types from '../constants/typesLogin';
import { fbLoginCompleted, fbLoginFailed } from '../actions/loginActions';
import { ofType } from 'redux-observable';
import { fbLoginObservable } from '../utils/rxify';
import 'rxjs';

export const fbLoginStartEpic = (action$, store) => {
  return action$
    .ofType(types.FB_LOGIN_STARTED)
    .mergeMap(fbLoginObservable)
    //.subscribe(response => fbLoginCompleted(response),err => fbLoginFailed(err))
    .map(response => fbLoginCompleted(response))
    .catch(err => fbLoginFailed(err))
}
