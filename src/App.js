import React from 'react';
import './App.css';
import AuthPage from './pages/AuthPage/authpage.component';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Routes>
          <Route path='/' element={<AuthPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </div>
    </DndProvider>
  );
}

export default App;
