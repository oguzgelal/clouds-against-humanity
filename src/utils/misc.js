import misc from '../constants/misc'

export const initFacebookApi = () => {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: misc.FB_APP_ID,
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
