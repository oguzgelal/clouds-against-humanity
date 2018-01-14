import env from '../config/env'

export const initFacebookApi = () => {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: env.FB_APP_ID,
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.10'
    });
    window.FB.AppEvents.logPageView();
  };

  (function (d, s, id) {
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

export const initExternalLibs = () => {
  env.CDN_CSS.map(css => {
    let element = document.createElement('link');
    element.href = css;
    element.rel = 'stylesheet';
    element.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(element);
  })
  env.CDN_JS.map(link => {
    let element = document.createElement('script');
    element.src = link;
    document.getElementsByTagName('body')[0].appendChild(element);
  })
}

export const randomString = (n = 10) => {
  let text = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < n; i += 1) { text += chars.charAt(Math.floor(Math.random() * chars.length)); }
  return text;
};
