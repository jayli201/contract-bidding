import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./Login.js";
import Signup from "./Signup.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
      </Router>
    </div>
  );
}

export default App;
