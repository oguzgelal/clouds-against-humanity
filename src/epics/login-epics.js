import * as types from '../config/types';
import { fbLoginCompleted, fbLoginFailed } from '../actions/login-actions';
import { ofType } from 'redux-observable';
import { fbLoginObservable } from '../utils/rxify';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export const fbLoginStartEpic = (action$, store) => {
  return action$
    .ofType(types.FB_LOGIN_STARTED)
    .mergeMap(action => fbLoginObservable()
      .map(fbLoginCompleted)
      .catch(err => Observable.of(fbLoginFailed(err)))
    )
}
