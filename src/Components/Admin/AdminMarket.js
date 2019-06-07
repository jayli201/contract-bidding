import React from "react";
import NavbarAd from "./NavbarAd";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col } from "antd";

class AdminMarket extends React.Component {
  state = {};
  render() {
    const { Header } = Layout;
    return (
      <div>
        <NavbarAd />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={12}>
            <h2 style={{ textAlign: "left" }}>Marketplace</h2>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}

export default AdminMarket;
