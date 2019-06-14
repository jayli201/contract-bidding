import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./About.css";
import {
  Row,
  Col,
  Button,
  Layout,
  PageHeader,
  Menu,
  Divider,
  Icon
} from "antd";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome" style={{ background: "white" }}>
        <Row className="welcome">
          <Col span={3} />
          <Col span={14}>
            <PageHeader
              className="welcome"
              style={{
                background: "white",
                textAlign: "left"
              }}
            >
              <NavLink to="/">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
          <Col span={4}>
            <PageHeader style={{ background: "white" }}>
              <Menu mode="horizontal" style={{ borderBottom: "transparent" }}>
                <Menu.Item>
                  <NavLink to="/">WELCOME</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/login">LOGIN</NavLink>
                </Menu.Item>
              </Menu>
            </PageHeader>
          </Col>
          <Divider />
        </Row>
        <br />
        <br />
        <div style={{ fontSize: "30px" }}>
          <label className="title">
            <h1 style={{ fontWeight: "bold" }}>About&ensp; </h1>
            <h1 style={{ color: "#237804", fontWeight: "bold" }}>RevTek</h1>
          </label>
          {/* <Divider /> */}
        </div>
        <br />
        <Row className="mission">
          <Col span={14}>
            <h3 style={{ fontSize: "20px" }}>
              <p>
                Our mission is what inspires us to be the top option for
                students aiming to venture into the field of technology.
              </p>
              <br />
              <p>
                We create opportunities to network, collaborate, and showcase
                the diverse talents of our students.
              </p>
              <br />
              <p>
                Our company partners are carefully selected to match our core
                values of effort, collaboration, and creativity.
              </p>
              <br />
              Being able to connect our students with these companies allows us
              to give them the needed skills to manuever the growing field on
              their paths to success.
            </h3>
          </Col>
        </Row>
      </div>
    );
  }
}
export default withRouter(About);
