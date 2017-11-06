import { Observable } from 'rxjs/Observable';

// Convert FB SDKs `FB.login()` method into an Observable
export const fbLoginObservable = () => {
  return Observable.create(observer => {
    if (!window.FB) { observer.error('Cannot load Facebook SDK') }
    window.FB.login(res => {
      if (!res.authResponse) { observer.error('Not authorised'); }
      observer.next(res)
      observer.complete();
    })
  })
}
