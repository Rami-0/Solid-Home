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

const LoginForm: React.FC<multi_stepFormProps> = ({ nextPage }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState<boolean>();
  const [cookies, setCookie, removeCookie] = useCookies(['refresh']);
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(['Login']);

  const translationPath = 'Login.';
  const inputsTranslationPath = 'inputs.';
  let data: loginCreds;

  function checkInput(input: string) {
    if (emailPattern.test(input)) {
      setInputError(false);
      data = {
        email: userName,
        password: password
      };
      return 'Email';
    }
    if (phonePattern.test(input)) {
      setInputError(false);
      data = {
        phone_number: userName,
        password: password
      };
      return 'Phone number';
    }
    if (input != '') {
      setInputError(true);
      return 'Unknown';
    }
  }

  const dispatch = useAppDispatch();
  const submitHandler = (e: any) => {
    e.preventDefault();
    const currentDate = new Date();
    const nextWeekDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    const req = dispatch(
      fetchLogin({
        email: userName,
        phone_number: userName,
        password: password
      })
      // nextPage ? nextPage() : '';
    );

    req.then((res) => {
      if (res.payload?.refresh) {
        setCookie('refresh', res?.payload?.refresh, {
          expires: nextWeekDate
        });
        dispatch(fetchUserData(res?.payload?.access));
      }
    });
    req.catch((err) => console.error(err));

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
    checkInput(userName);
  });

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
          error={inputError}
        />
        <InputMui
          id="2"
          label={t(`${inputsTranslationPath}password`)}
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={password}
          setValue={setPassword}
          type="password"
          required
        />
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
