import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Button } from "antd";
import firebase from "../firebase.js";

class NavbarCo extends Component {
  logout = () => {
    firebase.auth().signOut();
    console.log(firebase.auth().currentUser);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <NavLink
              to="/marketplace"
              activeStyle={{
                color: "green",
                fontWeight: "bold"
              }}
            >
              Marketplace
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to="/contract"
              activeStyle={{
                color: "green",
                fontWeight: "bold"
              }}
            >
              Submit contracts
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to="/task"
              activeStyle={{ color: "green", fontWeight: "bold" }}
            >
              Task manager
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to="/students"
              activeStyle={{
                color: "green",
                fontWeight: "bold"
              }}
            >
              Student profiles
            </NavLink>
          </Menu.Item>
          <Button onClick={this.logout} type="primary">
            Log out
          </Button>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavbarCo);
