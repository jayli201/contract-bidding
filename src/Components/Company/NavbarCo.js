import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

class NavbarCo extends Component {
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
              to="/students"
              activeStyle={{
                color: "green",
                fontWeight: "bold"
              }}
            >
              Student profiles
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavbarCo;
