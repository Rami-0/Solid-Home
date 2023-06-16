import React from 'react';
import './App.css';
import './global.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './components/Header/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Rent" element={<HomePage />} />
        <Route path="/Purchase" element={''} />
        <Route path="/Sale" element={''} />
        <Route path="/Realtors" element={''} />
        <Route path="/Developers" element={''} />
        <Route path="*" element={''} />
      </Routes>
    </div>
  );
};

export default App;
