import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Layout, Button } from "antd";

class CompanyMarket extends React.Component {
  state = {};
  render() {
    const { Header } = Layout;
    return (
      <div>
        <NavbarCo />
        company marketplace
      </div>
    );
  }
}

export default CompanyMarket;
