import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button } from "antd";

class StudentMarket extends React.Component {
  state = {};
  render() {
    const { Header } = Layout;
    return (
      <div>
        <Header style={{ background: "white", textAlign: "left" }}>
          Revtek
        </Header>
        <NavbarSt />
        student marketplace
      </div>
    );
  }
}

export default StudentMarket;
