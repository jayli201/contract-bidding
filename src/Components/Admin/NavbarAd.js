import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

class NavbarCo extends Component {
  render() {
    return (
      <div>
        <Menu mode="horizontal">
          <Menu.Item>
            <Link to="/approve">Approve contracts</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/subchallenge">Submit challenge</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/allstudents">Student profiles</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavbarCo;
