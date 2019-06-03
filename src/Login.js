import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase.js";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    this.props.history.push("/Signup");
  };

  logout = () => {
    firebase.auth().signOut();
    this.props.reset();
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>sign up</button>
        <button onClick={this.logout}>log out</button>
      </div>
    );
  }
}

export default withRouter(Login);
