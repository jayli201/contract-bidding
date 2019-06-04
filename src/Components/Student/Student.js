import React from "react";
import firebase from "../firebase.js";
import { Redirect, withRouter } from "react-router-dom";
import { Button } from "antd";
import NavbarSt from "./NavbarSt";
import { Layout } from "antd";

class Student extends React.Component {
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
        <NavbarSt />
        <header>I'm a student!</header>
        <Button onClick={this.logout}>log out</Button>
      </main>
    );
  }
}

export default withRouter(Student);
