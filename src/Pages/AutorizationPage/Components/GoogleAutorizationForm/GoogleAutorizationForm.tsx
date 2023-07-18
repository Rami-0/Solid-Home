import React, { useState } from 'react';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { SetUser } from '../../../../redux/Slices/authSlice';
import scss from './GoogleAutorizationForm.module.scss';
import FormInput from '../FormInput/FormInput';
import Button from '../../../../components/Button/Button';
import googleLogo from './Google-logo.svg';

const GoogleAutorizationForm = () => {
  const [values, setValues] = useState({
    username: '',
    lastName: '',
    email: '',
    tel: ''
    // password: '',
    // confirmPassword: ''
  });

  const inputs = [
    {
      id: '1',
      name: 'username',
      type: 'text',
      placeholder: 'Иван',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Имя',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: '2',
      name: 'lastName',
      type: 'text',
      placeholder: 'Иванов',
      label: 'Фамилия',
      errorMessage:
        "Lastname should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: '3',
      name: 'email',
      type: 'email',
      placeholder: 'ivanivanov@gmail.com',
      errorMessage: 'It should be a valid email address!',
      label: 'E-mail',
      required: true
    }
  ];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(SetUser(values));
    navigate('/otp');
    console.log(values);
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={scss['formWrapper']}>
      <img src={googleLogo} alt="googleLogo" />
      <h1 className={scss['formWrapper--title']}>Подтвердите свои данные</h1>
      <form onSubmit={submitHandler}>
        {inputs.map((input, index) => (
          <FormInput key={index} {...input} onChange={onChange} />
        ))}
        <Button variant={'primary'} style={{ height: 55 }} type={'submit'}>
          <p className="Button--2">Далее</p>
        </Button>
        <p className={scss['links'] + ' Subtitle--4'}>
          <a onClick={() => navigate(-1)}>Вернуться назад</a>
        </p>
      </form>
    </div>
  );
};

export default GoogleAutorizationForm;
