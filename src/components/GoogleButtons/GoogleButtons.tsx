import React from 'react';
import { GoogleLogin } from 'react-google-login';
import scss from './Google.module.scss';
import { useNavigate } from 'react-router-dom';
// import dotenv from 'dotenv';
// dotenv.config();
interface props {
  text: string;
}

export function GoogleLoginButton({ text }: props) {
  const client_id = '762305396162-9q67a6e6jhbi7b8pqvkd81qet3q8641j.apps.googleusercontent.com';

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
        disabled //disable it for now.
        className={scss['button']}
        clientId={client_id}
        buttonText={text}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
}
