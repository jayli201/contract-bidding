import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Drawer, List, Avatar, Divider, Col, Row, Layout } from "antd";

class Profiles extends React.Component {
  render() {
    return (
      <div>
        <NavbarCo />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={12}>
            <h2 style={{ textAlign: "left" }}>All student profiles</h2>
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profiles;
