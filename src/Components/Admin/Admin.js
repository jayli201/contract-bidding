import React from "react";
import firebase from "../firebase.js";
import { Redirect, withRouter } from "react-router-dom";
import { Button } from "antd";
import NavbarAd from "./NavbarAd.js";

class Admin extends React.Component {
  logout = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    this.props.history.push("/");
  };

  render() {
    return (
      <main>
        <NavbarAd />
        <header>I'm an admin!</header>
        <Button onClick={this.logout}>log out</Button>
      </main>
    );
  }
}

export default withRouter(Admin);
