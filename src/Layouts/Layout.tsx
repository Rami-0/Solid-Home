import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from './../components/Footer/Footer';
import useTokenToLogin from '../hooks/useTokenToLogin';

const Layout = () => {
  const login = useTokenToLogin();
  useEffect(() => {
    if (login) {
      login();
    }
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
