import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    function loadFacebookSDK() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: '689743435928745',
          cookie: true,
          xfbml: true,
          version: 'v10.0'
        });

        window.FB.AppEvents.logPageView();
      };

      // Load the SDK script
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }

    loadFacebookSDK();
  }, []);

  const handleFacebookLogin = () => {
    window.FB.login(response => {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken;
        // Send the access token to your backend for verification
        // You can use axios or fetch for making HTTP requests
        fetch('/api/facebook/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ accessToken }),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            // Handle the response from the server
          })
          .catch(error => {
            console.error('Error:', error);
          });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };

  return (
    <div className="App">
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    </div>
  );
}

export default App;
