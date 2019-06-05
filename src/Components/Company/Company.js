import React from "react";
import firebase from "../firebase.js";
import { Redirect, withRouter } from "react-router-dom";
import ComContractSubmit from "./ComContractSubmit.js";
import { Button, Layout } from "antd";
import NavbarCo from "./NavbarCo.js";

class Company extends React.Component {
  logout = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    this.props.history.push("/");
  };

  render() {
    const { Header } = Layout;

    return (
      <main>
        <Header style={{ background: "white", textAlign: "left" }}>
          Revtek
        </Header>
        <NavbarCo />
        <header>I'm a company!</header>
        <Button onClick={this.logout} type="primary">
          Log out
        </Button>
      </main>
    );
  }
}

export default withRouter(Company);
