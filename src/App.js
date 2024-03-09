import React, { useEffect } from 'react';

const FacebookLogin = () => {
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function() {
      window.FB.init({
        appId: '377418775207129',
        cookie: true,
        xfbml: true,
        version: 'v19.0'
      });

      window.FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
      });
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      testAPI();
    } else {
      document.getElementById('status').innerHTML = 'Please log into this webpage.';
    }
  }

  function checkLoginState() {
    window.FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function testAPI() {
    console.log('Welcome! Fetching your information.... ');
    window.FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }

  return (
    <div>
      {/* Render a regular button to trigger login */}
      <button onClick={() => checkLoginState()}>Login with Facebook</button>

      <div id="status"></div>
    </div>
  );
}

export default FacebookLogin;
