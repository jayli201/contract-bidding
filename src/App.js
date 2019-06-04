<<<<<<< HEAD
import React from "react";
import "./App.css";
import Login from "./Components/Login/Login.js";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Components/Routes.js";
import ComContractSubmit from './ComContractSubmit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
        <ComContractSubmit />
      </div>
    </BrowserRouter>
  );
}

export default App;
