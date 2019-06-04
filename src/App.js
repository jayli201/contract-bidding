import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Components/Routes.js';
import Header from './Components/header.js';

//This app uses react-router to create and navigate between multiple pages
//This tutorial is helpful for understanding this:
// https://blog.pshrmn.com/simple-react-router-v4-tutorial/
function App() {
  return (
    <BrowserRouter>
    <div className = "App">
      <Header />
      <Routes />
    </div>
    </BrowserRouter>
  );
}

export default App;
