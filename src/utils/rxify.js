import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';

export const fbLoginObservable = () => {
  return Observable.bindCallback(window.FB.login, (response) => {
    if (!response.authResponse) {
      throw new Error('User cancelled login or did not fully authorize');
    }
    return response;
  })();
}
