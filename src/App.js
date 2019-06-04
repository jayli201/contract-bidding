import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Components/Routes.js";
// import Challenge from "./Challenge.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>
      {/* <Challenge /> */}
    </BrowserRouter>
  );
}

export default App;
