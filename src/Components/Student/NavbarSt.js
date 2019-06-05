import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

class NavbarSt extends Component {
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

          {/*   <Link to="/studentProfile">Profile</Link> */}

            <NavLink
              to="/studentProfile"
              activeStyle={{
                color: "green",
                fontWeight: "bold"
              }}
            >
              Profile
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
              Daily challenge
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavbarSt;
