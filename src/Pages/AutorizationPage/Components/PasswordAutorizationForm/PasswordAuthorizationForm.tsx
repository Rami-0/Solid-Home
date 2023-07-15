import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import scss from './PasswordAuthorizationForm.module.scss';
import FormInput from '../FormInput/FormInput';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { SetUser } from '../../../../redux/Slices/authSlice';
import Button from '../../../../components/Button/Button';
import { multi_stepFormProps } from '../../../../types/multiFormProps';
const PasswordAuthorizationForm: React.FC<multi_stepFormProps> = ({ prevPage }) => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [confirm, setConfirm] = useState(false);

  const inputs = [
    {
      id: '4',
      name: 'password',
      type: 'password',
      placeholder: 'Пароль',
      errorMessage: 'Это ненадежный пароль',
      label: 'Пароль',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: '5',
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Подтвердите пароль',
      errorMessage: confirm ? 'Пароли совпадают' : 'Пароли не совпадают',
      label: 'Подтверждение пароля',
      required: true
    }
  ];

  const [values, setValues] = useState({
    password: '',
    confirmPassword: ''
  });

  useEffect(() => {
    if (values.confirmPassword === values.password && values.confirmPassword != '') {
      setConfirm(true);
    } else setConfirm(false);
  }, [values.confirmPassword]);

  console.log(confirm);

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
      <h1 className={scss['formWrapper--title']}>Создайте пароль</h1>
      <p className="Subtitle--4">
        Пароль должен содержать не менее 8 символов, а также как минимум одну букву и одну цифру.
      </p>
      <form onSubmit={submitHandler}>
        {inputs.map((input, index) => (
          <FormInput key={index} {...input} confirm={confirm} onChange={onChange} />
        ))}
        <Button variant={'primary'} style={{ height: 55 }} type={'submit'}>
          <p className="Button--2">Далее</p>
        </Button>
        <p className={scss['links'] + ' Subtitle--4'}>
          <a onClick={prevPage}>Вернуться назад</a>
        </p>
      </form>
    </div>
  );
};

export default PasswordAuthorizationForm;
