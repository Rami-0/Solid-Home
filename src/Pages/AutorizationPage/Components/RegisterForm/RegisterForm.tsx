import React from 'react';
import scss from './RegisterForm.module.scss';
import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../../../../components/Button/Button';
import { GoogleLoginButton } from '../../../../components/GoogleButtons/GoogleButtons';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { SetUser, fetchRegister } from '../../../../redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { multi_stepFormProps } from '../../../../types/multiFormProps';
import { RegisterInputs } from '../../../../constants/RegisterInputs';
import { useTranslation } from 'react-i18next';
import useAuth from './../../../../hooks/useAuth';

const RegisterForm: React.FC<multi_stepFormProps> = ({ nextPage }) => {
  const { t } = useTranslation(['Register']);
  const translationPath = 'Register.';
  const dispatch = useAppDispatch();

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '+996'
  });

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const data = {
    first_name: 'string',
    last_name: 'string',
    email: 'user@example.com',
    phone_number: '+999999999999'
  };

  // async function test() {
  //   const response = await fetch('http://13.48.58.81:8000/my_auth/api/registration/', {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-Custom-Header': 'foobar'
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   console.log(response.json());
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }

  const submitHandler = (e: any) => {
    e.preventDefault();
    nextPage ? nextPage() : '';
    dispatch(
      fetchRegister({
        first_name: 'string',
        last_name: 'string',
        email: 'user@example.com',
        phone_number: '+999999999999'
      })
    );
    // test();
    // setUser(values);
    console.log(values);
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={scss['formWrapper']}>
      <h1 className={scss['formWrapper--title']}>{t(`${translationPath}register`)}</h1>
      <form onSubmit={submitHandler}>
        {RegisterInputs.map((input, index) => (
          <FormInput
            {...input}
            key={index}
            label={t(`inputs.${input.name}.label`)}
            placeholder={t(`inputs.${input.name}.placeholder`)}
            errorMessage={t(`inputs.${input.name}.errorMessage`)}
            value={values[input.name as keyof typeof values]}
            onChange={onChange}
          />
        ))}
        <Button variant={'primary'} style={{ height: 55 }} type={'submit'}>
          <p className="Button--2">{t(`${translationPath}next`)}</p>
        </Button>
        <GoogleLoginButton text={t(`${translationPath}google`)} />
        <p className={scss['links'] + ' Subtitle--4'}>
          {t(`${translationPath}uHaveAcc`)}
          <a onClick={() => navigate('/login')}>{t(`${translationPath}login`)}</a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
