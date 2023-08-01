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
import Loading from '../../../../components/Loading/Loading';

const RegisterForm: React.FC<multi_stepFormProps> = ({ nextPage }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading } = useAuth();
  const { t } = useTranslation(['Register']);

  const translationPath = 'Register.';

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '+996'
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    const req = dispatch(fetchRegister(values));
    req
      .then((response) => {
        console.log('Request fulfilled:', response.payload?.['200'].user_id);
        nextPage ? nextPage() : '';
      })
      .catch((error) => {
        console.log('Request error:', error);
      });
    console.log(values);
  };

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  if (loading) return <Loading />;

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
