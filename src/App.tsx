import React from 'react';
import './App.css';
import './global.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import RequireAuth from './components/RequireAuth';
import Layout from './Layouts/Layout';
import AutorizationLayout from './Layouts/AutorizationLayout';
import RegisterLayout from './Layouts/RegisterLayout';
import LoginLayout from './Layouts/LoginLayout';
import ReturnPasswordLayout from './Layouts/ReturnPasswordLayout';

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
          <Route path="/login" element={<LoginLayout />} />
          <Route path="/register" element={<RegisterLayout />} />
          <Route path="/returnpassword" element={<ReturnPasswordLayout />} />
        </Route>
        <Route path="*" element={'404'} />
      </Routes>
    </div>
  );
};

export default App;
