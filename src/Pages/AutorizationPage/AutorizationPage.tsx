import React from 'react';
import useAuth from '../../hooks/useAuth';
import scss from './AutorizationPage.module.scss';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginForm from './Components/LoginForm/LoginForm';

interface Iprops {
  registerForm?: boolean;
}

const AutorizationPage: React.FC<Iprops> = ({ registerForm }) => {
  const { isAuthenticated, handleLogin, handleLogout } = useAuth();

  return (
    <section className={scss['PageWrapper']}>
      {registerForm ? (
        <>
          <RegisterForm />
        </>
      ) : (
        <>
          <LoginForm />
        </>
      )}
    </section>
  );
};

export default AutorizationPage;
