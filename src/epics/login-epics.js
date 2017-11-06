import * as types from '../config/types';
import { fbLoginCompleted, fbLoginFailed, fbLoginRedirect } from '../actions/login-actions';
import { ofType } from 'redux-observable';
import { fbLoginObservable, fbFetchObservable } from '../utils/rxify';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export const fbLoginStartEpic = (action$, store) => {
  return action$
    .ofType(types.FB_LOGIN_STARTED)
    .mergeMap(action => fbLoginObservable()
      .catch(err => Observable.of(fbLoginFailed(err)))
    )
    .mergeMap(data => fbFetchObservable(data.authResponse)
      .map(fbLoginCompleted)
      .catch(err => Observable.of(fbLoginFailed(err)))
    )
}

export const fbLoginCompletedEpic = (action$, store) => {
  return action$
    .ofType(types.FB_LOGIN_COMPLETED)
    .map(fbLoginRedirect)
}
