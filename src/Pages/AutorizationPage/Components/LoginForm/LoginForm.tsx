import React, { useState, useEffect } from 'react';
import InputMui from './../../../../components/InputMui/InputMui';

import scss from './LoginForm.module.scss';
import Button from './../../../../components/Button/Button';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from '../../../../components/GoogleButtons/GoogleButtons';
// import { gapi } from 'gapi-script';
import { multi_stepFormProps } from '../../../../types/multiFormProps';
import { useTranslation } from 'react-i18next';
import { emailPattern, phonePattern } from '../../../../constants/RegExp';
import { loginCreds } from '../../../../types/user';
import { fetchLogin, fetchUserData } from '../../../../redux/Slices/authSlice';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useCookies } from 'react-cookie';
import useAuth from '../../../../hooks/useAuth';
import Loading from '../../../../components/Loading/Loading';

interface error {
  message?: string;
  user?: boolean;
  password?: boolean;
}

const LoginForm: React.FC<multi_stepFormProps> = ({ nextPage }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<error>();
  const [cookies, setCookie, removeCookie] = useCookies(['refresh']);
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(['Login']);

  const translationPath = 'Login.';
  const inputsTranslationPath = 'inputs.';
  const [data, setData] = useState<loginCreds>({ email: '', password: '', phone_number: '' });

  function checkInput(input: string) {
    if (emailPattern.test(input)) {
      setError({
        user: false
      });
      setData({
        email: userName,
        phone_number: null,
        password: password
      });
      return data;
    }
    if (phonePattern.test(input)) {
      setError({
        user: false
      });
      setData({
        email: null,
        phone_number: userName,
        password: password
      });
      return data;
    }
    if (input != '') {
      setData({
        email: userName,
        phone_number: null,
        password: password
      });
      setError({
        user: true
      });
    }
    return data;
  }

  const dispatch = useAppDispatch();
  const submitHandler = (e: any) => {
    e.preventDefault();
    const currentDate = new Date();
    const nextWeekDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    const req = dispatch(fetchLogin(checkInput(userName)));
    req.then((res) => {
      if (res.payload?.refresh) {
        // nextPage ? nextPage() : '';
        setCookie('refresh', res?.payload?.refresh, {
          expires: nextWeekDate
        });
        dispatch(fetchUserData(res?.payload?.access));
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (res?.error) {
        setError({
          message: 'email or password is not correct!',
          user: true,
          password: true
        });
      }
    });
    // TODO : Add code here
  };

  const CLIENT_ID = '762305396162-9q67a6e6jhbi7b8pqvkd81qet3q8641j.apps.googleusercontent.com';
  useEffect(() => {
    // function start() {
    //   gapi.client.init({
    //     client_id: CLIENT_ID,
    //     scope: ''
    //   });
    // }
    // gapi.load('client:auth2', start);
  });
  useEffect(() => {
    checkInput(userName);
  }, [userName, password]);

  const handleReturnPassword = (e: any) => {
    e.preventDefault();
    navigate('/ReturnPassword');
  };

  if (isAuthenticated) {
    const goTo = location.state?.from?.pathname;
    return <Navigate to={`${goTo ? goTo : '/'}`} />;
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className={scss['formWrapper']}>
      <h1 className={scss['formWrapper--title']}>{t(`${translationPath}login`)}</h1>
      <form className={scss['formWrapper--form']} onSubmit={submitHandler}>
        <InputMui
          id="1"
          label={t(`${inputsTranslationPath}username`)}
          placeholder={t(`${inputsTranslationPath}placeholder`)}
          value={userName}
          setValue={setUserName}
          required
          error={error?.user}
        />
        <InputMui
          id="2"
          label={t(`${inputsTranslationPath}password`)}
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={password}
          setValue={setPassword}
          type="password"
          required
          error={error?.password}
        />
        <p className="Subtitle--3" style={{ color: 'var(--error)' }}>
          {error?.message}
        </p>
        <p className={scss['links'] + ' Subtitle--4'}>
          <a onClick={handleReturnPassword}>{t(`${translationPath}forgot`)}</a>
        </p>
        <Button variant={'primary'} type={'submit'} style={{ height: 55 }}>
          <p className="Button--2">{t(`${translationPath}next`)}</p>
        </Button>
        <GoogleLoginButton text={t(`${translationPath}google`)} />
        <p className={scss['links'] + ' Subtitle--4'}>
          {t(`${translationPath}dontHave`)}{' '}
          <a onClick={() => navigate('/register')}>{t(`${translationPath}registerRN`)}</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
