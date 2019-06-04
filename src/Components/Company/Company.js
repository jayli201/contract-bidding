import React from "react";
import firebase from "../firebase.js";
import { Redirect, withRouter } from "react-router-dom";
import ComContractSubmit from "./ComContractSubmit.js";
import { Button } from "antd";

class Company extends React.Component {
  logout = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    this.props.history.push("/");
  };

  render() {
    return (
      <main>
        <header>I'm a company!</header>
        <ComContractSubmit />
        <Button onClick={this.logout}>log out</Button>
      </main>
    );
  }
}

export default withRouter(Company);
