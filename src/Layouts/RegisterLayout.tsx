import React, { useState } from 'react';
import RegisterForm from '../Pages/AutorizationPage/Components/RegisterForm/RegisterForm';
import OTP_Form from '../Pages/AutorizationPage/Components/OTP_Form/OTP_Form';
import PasswordAuthorizationForm from '../Pages/AutorizationPage/Components/PasswordAutorizationForm/PasswordAuthorizationForm';

const RegisterLayout = () => {
  // const registerFormFlow = ['register', 'otp', 'password'];
  const [page, setPage] = useState(0);

  // const loginFormFlow = ['login', 'otp'];
  const nextPage = () => {
    setPage(page + 1);
    return 0;
  };
  const prevPage = () => {
    setPage(page - 1);
    return 0;
  };
  const renderRegister = () => {
    if (page === 0) {
      return <RegisterForm nextPage={nextPage} />;
    } else if (page === 1) {
      return <OTP_Form nextPage={nextPage} prevPage={prevPage} />;
    } else {
      return <PasswordAuthorizationForm prevPage={prevPage} />;
    }
  };

  return <>{renderRegister()}</>;
};

export default RegisterLayout;
