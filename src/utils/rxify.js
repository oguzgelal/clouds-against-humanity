import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/bindCallback';

export const fbLoginObservable = () => {
  return Observable.create(observer => {
    if (!window.FB) { observer.error('Cannot load Facebook SDK') }
    window.FB.login(res => {
      if (!res.authResponse) { observer.error('User cancelled login or did not fully authorize'); }
      observer.next(res)
      observer.complete()
    })
  })
}
