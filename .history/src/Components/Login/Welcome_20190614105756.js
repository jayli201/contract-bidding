import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Layout,
  PageHeader,
  Menu,
  Divider,
  Icon
} from "antd";
import "./Welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.login = this.login.bind(this);
  }

  login = () => {
    this.history.props.push("/login");
  };



  render() {
    const { Header, Sider, Content } = Layout;
    //normal rendering for login page
    return (
      <div className="welcome" style={{ background: "white" }}>
        <Row className="welcome">
          <Col span={3} />
          <Col span={15}>
            <PageHeader
              className="welcome"
              style={{
                background: "white",
                textAlign: "left"
              }}
            >
              <NavLink to="/">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
          <Col span={3}>
            <PageHeader style={{ background: "white" }}>
              <Menu style={{ borderBottom: "transparent" }}>
                <Menu.Item>
                  <NavLink
                    to="/login"
                    style={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    LOGIN
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/About" style={{
                    color: "green",
                    fontWeight: "bold"
                  }}>
                    ABOUT
              </NavLink>
                </Menu.Item>
              </Menu>
            </PageHeader>
          </Col>
          <Divider />

        </Row>
        {/* <Row>
          <Col span={3} />
          <Col span={18}>
            <PageHeader style={{ background: "#389e0d" }} />
          </Col>
          <Col span={3} />
        </Row> */}
        <br />
        <br />
        <Row>
          <div className="center">
            <Content
              style={{
                borderStyle: "solid",
                borderColor: "#237804",
                fontSize: "25px"
              }}
            >
              <br />
              <h1
                style={{
                  color: "#092b00"
                }}
              >
                We
              </h1>
              <h1
                style={{
                  color: "#092b00"
                }}
              >
                Think
                {/* <Icon type="bulb" theme="twoTone" twoToneColor="#fadb14" /> */}
              </h1>
              <h1
                style={{
                  color: "#237804"
                }}
              >
                Together
              </h1>
              <br />
            </Content>
          </div>
          <br />
          <br />
          <h1
            className="text"
            style={{
              color: "#092b00"
            }}
          >
            RevTek makes communicating easier so you can start focusing on
            projects sooner.
          </h1>
          <br />
          <Button
            type="primary"
            icon="double-right"
            onClick={() => {
              this.props.history.push("/login");
            }}
          />
        </Row>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(Welcome);
