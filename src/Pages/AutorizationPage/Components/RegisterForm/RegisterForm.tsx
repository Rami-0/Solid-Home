import React, { useState } from 'react';
import InputMui from '../../../../components/InputMui/InputMui';
import scss from './RegisterForm.module.scss';
import Button from '../../../../components/Button/Button';
import { GoogleLoginButton } from '../../../../components/GoogleButtons/GoogleButtons';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { SetUser } from '../../../../redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tel, setTel] = useState<number | string | undefined>();
  const [email, setEmail] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      SetUser({
        name: name,
        lastname: lastName,
        role: 'user',
        email: email,
        number: tel
      })
    );
    navigate('/otp');

    // TODO : Add code here
  };

  return (
    <div className={scss['formWrapper']}>
      <h1 className={scss['formWrapper--title']}>Регистрация</h1>
      <InputMui id="1" label={'Имя'} placeholder="Иван" value={name} setValue={setName} required />
      <InputMui
        id="2"
        label={'Фамилия'}
        placeholder="Иванов"
        value={lastName}
        setValue={setLastName}
        required
      />
      <InputMui
        id="3"
        label={'Номер телефона'}
        placeholder="+996"
        value={tel}
        type="number"
        setValue={setTel}
        required
      />
      <InputMui
        id="4"
        label={'E-mail'}
        placeholder="ivanivanov@gmail.com"
        value={email}
        setValue={setEmail}
        type="email"
        required
      />
      <Button variant={'primary'} onClick={submitHandler} style={{ height: 55 }}>
        <p className="Button--2">Далее</p>
      </Button>
      <GoogleLoginButton />
    </div>
  );
};

export default RegisterForm;
