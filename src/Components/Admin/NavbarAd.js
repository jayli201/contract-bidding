import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Button, Row, Col, PageHeader } from "antd";
import firebase from "../firebase.js";

class NavbarAd extends Component {
  logout = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Row>
          <Col span={3} />
          <Col span={8}>
            <PageHeader style={{ background: "white", textAlign: "left" }}>
              <img src="images/logo.png" width="175" height="50" />
            </PageHeader>
          </Col>
          <Col span={8}>
            <PageHeader style={{ background: "white" }}>
              <br />
              <Menu mode="horizontal" style={{ background: "white" }}>
                <Menu.Item>
                  <NavLink
                    to="/approve"
                    activeStyle={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Edit contracts
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/subchallenge"
                    activeStyle={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Daily challenge
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/allstudents"
                    activeStyle={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Profiles
                  </NavLink>
                </Menu.Item>
              </Menu>
            </PageHeader>
          </Col>
          <Col span={2}>
            <PageHeader style={{ background: "white" }}>
              <br />
              <Button onClick={this.logout} type="primary">
                Log out
              </Button>
            </PageHeader>
          </Col>
          <Col span={3} />
        </Row>
        <Row type="flex" justify="center" align="top">
          <Col span={3} />
          <Col span={18}>
            <PageHeader style={{ background: "#389e0d" }} />
          </Col>
          <Col span={3} />
        </Row>
      </div>
    );
  }
}

export default withRouter(NavbarAd);
