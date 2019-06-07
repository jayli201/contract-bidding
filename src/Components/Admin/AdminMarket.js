import React from "react";
import NavbarAd from "./NavbarAd";
import firebase from "../firebase.js";
import { Layout, Button } from "antd";

class AdminMarket extends React.Component {
  state = {};
  render() {
    const { Header } = Layout;
    return (
      <div>
        <NavbarAd />
        admin marketplace
      </div>
    );
  }
}

export default AdminMarket;
