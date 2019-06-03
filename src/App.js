import React from 'react';
import './App.css';
import Login from './Components/Login/Login.js';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes.js';

function App() {
  return (
    <BrowserRouter>
    <div className = "App">

      <Routes />
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
