import React, { useState, useEffect } from 'react';
import useAuth from '../../../../hooks/useAuth';
import scss from './PasswordAuthorizationForm.module.scss';
import FormInput from '../FormInput/FormInput';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { fetchPasswordCreate } from '../../../../redux/Slices/authSlice';
import Button from '../../../../components/Button/Button';
import { multi_stepFormProps } from '../../../../types/multiFormProps';
import Loading from '../../../../components/Loading/Loading';
const PasswordAuthorizationForm: React.FC<multi_stepFormProps> = ({ prevPage }) => {
  const { user_id, loading } = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState<undefined | string>();
  const [confirm, setConfirm] = useState(false);
  const [values, setValues] = useState({
    password1: '',
    password2: ''
  });

  const inputs = [
    {
      id: '4',
      name: 'password1',
      type: 'password',
      placeholder: 'Пароль',
      errorMessage: 'Это ненадежный пароль',
      label: 'Пароль',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: '5',
      name: 'password2',
      type: 'password',
      placeholder: 'Подтвердите пароль',
      errorMessage: confirm ? 'Пароли совпадают' : 'Пароли не совпадают',
      label: 'Подтверждение пароля',
      required: true
    }
  ];

  useEffect(() => {
    if (values.password2 === values.password1 && values.password2 != '') {
      setConfirm(true);
    } else setConfirm(false);
  }, [values.password2]);

  const submitHandler = (e: any) => {
    e.preventDefault();
    const req = dispatch(fetchPasswordCreate({ user_id: user_id ? user_id : 0, ...values }));
    req
      .then((response) => {
        if (response.payload?.['200']) {
          navigate('/login');
        }
      })
      .catch(() => {
        setError('Invalid request, Try Again');
      });
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (loading) return <Loading />;

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
          <p className="Button--2">{error ? error : 'Далее'}</p>
        </Button>
        <p className={scss['links'] + ' Subtitle--4'}>
          <a onClick={prevPage}>Вернуться назад</a>
        </p>
      </form>
    </div>
  );
};

export default PasswordAuthorizationForm;
