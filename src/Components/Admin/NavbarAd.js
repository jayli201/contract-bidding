import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

class NavbarAd extends Component {
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
        </Menu>
      </div>
    );
  }
}

export default NavbarAd;
