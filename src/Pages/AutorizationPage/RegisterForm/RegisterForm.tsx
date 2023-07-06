import React from 'react';
import scss from './RegisterForm.module.scss';
import { useState } from 'react';
import FormInput from '../Components/FormInput/FormInput';
import Button from '../../../components/Button/Button';
import { GoogleLoginButton } from './../../../components/GoogleButtons/GoogleButtons';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { SetUser } from '../../../redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';

const RegisterForm: React.FC = () => {
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
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: 'Username',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id: 2,
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
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid email address!',
      label: 'Email',
      required: true
    },
    {
      id: 4,
      name: 'tel',
      type: 'tel',
      placeholder: '+996',
      label: 'Номер телефона',
      pattern: '^0[0-9]{3}[0-9]{3}[0-9]{3}$',
      errorMessage: 'invalid Number!',
      required: true
    }
    // {
    //   id: 4,
    //   name: 'password',
    //   type: 'text',
    //   placeholder: 'Password',
    //   errorMessage:
    //     'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    //   label: 'Password',
    //   pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    //   required: true
    // },
    // {
    //   id: 5,
    //   name: 'confirmPassword',
    //   type: 'text',
    //   placeholder: 'Confirm Password',
    //   errorMessage: "Passwords don't match!",
    //   label: 'Confirm Password',
    //   required: true
    // }
  ];
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(SetUser(values));
    navigate('/otp');
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className={scss['formWrapper']}>
      <h1 className={scss['formWrapper--title']}>Регистрация</h1>
      <form>
        {inputs.map((input) => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <Button variant={'primary'} onClick={submitHandler} style={{ height: 55 }}>
          <p className="Button--2">Далее</p>
        </Button>
        <GoogleLoginButton />
      </form>
    </div>
  );
};

export default RegisterForm;
