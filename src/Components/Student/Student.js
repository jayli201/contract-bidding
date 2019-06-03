import React from "react";
import firebase from "../firebase.js";
import { Redirect, withRouter } from "react-router-dom";

class Student extends React.Component {
  logout = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    this.props.history.push("/");
  };

  render() {
    return (
      <main>
        <header>I'm a student!</header>
        <button onClick={this.logout}>log out</button>
      </main>
    );
  }
}

export default withRouter(Student);
