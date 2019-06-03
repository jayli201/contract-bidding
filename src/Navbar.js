import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/Home">Home</Link>
      </div>
    );
  }
}

export default Navbar;
