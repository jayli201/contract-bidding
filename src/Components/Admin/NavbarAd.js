import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Menu, Button } from "antd";
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
        <Menu mode="horizontal">
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
          <Button onClick={this.logout} type="primary">
            Log out
          </Button>
        </Menu>
      </div>
    );
  }
}

export default withRouter(NavbarAd);
