import React from 'react';
import { GoogleLogin } from 'react-google-login';
import scss from './Google.module.scss';
import { useNavigate } from 'react-router-dom';
// import dotenv from 'dotenv';
// dotenv.config();
export function GoogleLoginButton() {
  const client_id = '762305396162-9q67a6e6jhbi7b8pqvkd81qet3q8641j.apps.googleusercontent.com';

  const navigete = useNavigate();
  function onSuccess(res: any) {
    console.log('login_succsesfuly', res);
    // navigete('/');
  }
  function onFailure(res: any) {
    return console.log('login_Faild', res);
  }
  return (
    <div style={{ width: 100 + '%' }}>
      <h1>{}</h1>
      <GoogleLogin
        className={scss['button']}
        clientId={client_id}
        buttonText="Войти с Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
}
