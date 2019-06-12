import React from "react";
import firebase from "firebase";
import { Row, Col, Button, Input, Layout, Divider, message } from "antd";
import NavbarCo from "./NavbarCo";

export default class TaskStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Header, Footer } = Layout;
    const { TextArea } = Input;

    return (
      <div className="all">
        <NavbarCo />
        <br />
        <br />
        <Row style={{ textAlign: "left" }}>
          <Col span={6} />
          <Col span={8}>
            <h2 style={{ textAlign: "left" }}>Status of student tasks</h2>
          </Col>
        </Row>
      </div>
    );
  }
}
