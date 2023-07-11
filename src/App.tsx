import React from 'react';
import './App.css';
import './global.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import RequireAuth from './components/RequireAuth';
import Layout from './Layouts/Layout';
import AutorizationLayout from './Layouts/AutorizationLayout';
import AutorizationPage from './Pages/AutorizationPage/AutorizationPage';
import OTP_Form from './Pages/AutorizationPage/Components/OTP_Form/OTP_Form';
import LoginForm from './Pages/AutorizationPage/Components/LoginForm/LoginForm';
import RegisterForm from './Pages/AutorizationPage/Components/RegisterForm/RegisterForm';
import PasswordAuthorizationForm from './Pages/AutorizationPage/Components/PasswordAutorizationForm/PasswordAuthorizationForm';
import GoogleAutorizationForm from './Pages/AutorizationPage/Components/GoogleAutorizationForm/GoogleAutorizationForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Rent" element={<HomePage />} />
          <Route path="/Purchase" element={''} />
          <Route path="/Realtors" element={''} />
          <Route path="/Developers" element={''} />
          <Route element={<RequireAuth allowedRoles={[1, 2, 3, 4]} />}>
            <Route path="/Sale" element={''} />
          </Route>
        </Route>
        <Route path="/" element={<AutorizationLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="OTP" element={<OTP_Form />} />
          <Route path="gof" element={<GoogleAutorizationForm />} />
          <Route path="PASS" element={<PasswordAuthorizationForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
        <Route path="*" element={'404'} />
      </Routes>
    </div>
  );
};

export default App;
