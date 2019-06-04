import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

class NavbarCo extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/marketplace">Marketplace</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contract">Submit contracts</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/students">Student profiles</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavbarCo;
