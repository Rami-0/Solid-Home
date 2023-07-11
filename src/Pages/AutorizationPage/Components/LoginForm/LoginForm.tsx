import React, { useState, useEffect } from 'react';
import InputMui from './../../../../components/InputMui/InputMui';

import scss from './LoginForm.module.scss';
import Button from './../../../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from '../../../../components/GoogleButtons/GoogleButtons';
import { gapi } from 'gapi-script';
import FormInput from './../FormInput/FormInput';

const LoginForm: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventdefault;
    // TODO : Add code here
  };

  const CLIENT_ID = '762305396162-9q67a6e6jhbi7b8pqvkd81qet3q8641j.apps.googleusercontent.com';

  useEffect(() => {
    function start() {
      gapi.client.init({
        client_id: CLIENT_ID,
        scope: ''
      });
    }
    gapi.load('client:auth2', start);
  });

  const inputs = {};

  return (
    <div className={scss['formWrapper']}>
      <h1 className={scss['formWrapper--title']}>Войти</h1>
      <form className={scss['formWrapper--form']}>
        <InputMui
          id="1"
          label={'Номер телефона или e-mail:'}
          placeholder="Номер телефона или e-mail"
          value={name}
          setValue={setName}
          required
        />
        <InputMui
          id="2"
          label={'Пароль:'}
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={password}
          setValue={setPassword}
          type="password"
          required
        />
        <Button variant={'primary'} onClick={submitHandler} style={{ height: 55 }}>
          <p className="Button--2">Далее</p>
        </Button>
        <GoogleLoginButton />
        <p className={scss['links'] + ' Subtitle--4'}>
          Еще нет учетной записи?{' '}
          <a onClick={() => navigate('/register')}>Зарегистрируйся прямо сейчас!</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
