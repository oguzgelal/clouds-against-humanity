import { Observable } from 'rxjs/Observable';

// Convert FB SDKs `FB.login()` method into an Observable
export const fbLoginObservable = () => {
  return Observable.create(observer => {
    if (!window.FB) { observer.error('Cannot load Facebook SDK') }
    window.FB.login(res => {
      if (!res.authResponse) { observer.error('Not authorised'); }
      observer.next(res)
      observer.complete();
    }, { scope: 'public_profile,email' })
  })
}

// Fetch profile data
export const fbFetchObservable = data => {
  return Observable.create(observer => {
    if (!window.FB) { observer.error('Cannot load Facebook SDK') }
    window.FB.api('/me', { access_token: data.accessToken, fields: 'id,name,email,gender' }, res => {
      if (!res.id) { observer.error('Not authorised'); }
      observer.next(Object.assign({}, res, data))
      observer.complete();
    })
  })
}
