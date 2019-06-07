import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col } from "antd";

class CompanyMarket extends React.Component {
  state = {};
  render() {
    const { Header } = Layout;
    return (
      <div>
        <NavbarCo />
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

export default CompanyMarket;
