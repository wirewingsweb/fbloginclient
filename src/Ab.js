const handleLogin = async () => {

    const url = 'https://www.facebook.com/v3.2/dialog/oauth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Ffacebook%2Fcallback&client_id=689743435928745';
    window.open(url, '_blank', 'width=600,height=600');
  
  
};