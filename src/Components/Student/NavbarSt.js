import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Button, Row, Col, PageHeader } from "antd";
import firebase from "../firebase.js";

class NavbarSt extends Component {
  logout = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    this.props.history.push("/");
  };

  render() {
    const styles = {
      fontSize: "20px"
    };

    return (
      <div style={{ background: "white" }}>
        <Row>
          <Col span={3} />
          <Col span={6}>
            <PageHeader style={{ background: "white", textAlign: "left" }}>
              <NavLink to="/smarket">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
          <Col span={10}>
            <PageHeader style={{ background: "white" }}>
              <br />
              <Menu mode="horizontal" style={{ background: "white" }}>
                <Menu.Item>
                  <NavLink
                    to="/smarket"
                    activeStyle={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    <div style={styles}>Marketplace</div>
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/challenge"
                    activeStyle={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    <div style={styles}>Challenges</div>
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/task"
                    activeStyle={{ color: "green", fontWeight: "bold" }}
                  >
                    <div style={styles}>Company tasks</div>
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink
                    to="/profile"
                    activeStyle={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    <div style={styles}>Profile</div>
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

export default withRouter(NavbarSt);
