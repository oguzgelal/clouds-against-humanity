import * as types from '../constants/typesLogin';
import { fbLoginCompleted, fbLoginFailed } from '../actions/loginActions';
import { ofType } from 'redux-observable';
import { fbLoginObservable } from '../utils/rxify';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

export const fbLoginStartEpic = (action$, store) => {
  return action$
    .ofType(types.FB_LOGIN_STARTED)
    .mergeMap(action => fbLoginObservable()
      .map(fbLoginCompleted)
      .catch(err => Observable.of(fbLoginFailed(err)))
    )
}
