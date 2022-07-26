import React from 'react';
import './App.css';
import AuthPage from './pages/AuthPage/authpage.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
