import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

class NavbarSt extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/marketplace">Marketplace</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/studentProfile">Profile</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/challenge">Daily challenge</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavbarSt;
