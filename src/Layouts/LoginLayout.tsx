import React, { useEffect, useState } from 'react';
import LoginForm from '../Pages/AutorizationPage/Components/LoginForm/LoginForm';
import OTP_Form from '../Pages/AutorizationPage/Components/OTP_Form/OTP_Form';
import useTokenToLogin from '../hooks/useTokenToLogin';

const LoginLayout = () => {
  const [page, setPage] = useState(0);
  const login = useTokenToLogin();
  useEffect(() => {
    if (login) {
      login();
    }
  }, []);
  const nextPage = () => {
    setPage(page + 1);
    return 0;
  };
  const prevPage = () => {
    setPage(page - 1);
    return 0;
  };
  const renderLogin = () => {
    if (page === 0) {
      return <LoginForm nextPage={nextPage} />;
    } else {
      return <OTP_Form nextPage={nextPage} prevPage={prevPage} isDirect />;
    }
  };
  return <>{renderLogin()}</>;
};

export default LoginLayout;
