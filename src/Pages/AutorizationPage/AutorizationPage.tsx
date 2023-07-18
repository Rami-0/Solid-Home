import React from 'react';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import LoginForm from './Components/LoginForm/LoginForm';

interface Iprops {
  registerForm?: boolean;
}

const AutorizationPage: React.FC<Iprops> = ({ registerForm }) => {
  return (
    <section>
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
