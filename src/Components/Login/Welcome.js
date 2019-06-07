import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Row, Col, Carousel, Layout, PageHeader, Menu } from "antd";

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
    const { Header, Sider } = Layout;

    //normal rendering for login page
    return (
      <div>
        <Row>
          <Col span={3} />
          <Col span={15}>
            <PageHeader
              style={{
                background: "white",
                textAlign: "left"
                // border: "solid",
                // borderTopColor: "white",
                // borderLeftColor: "white",
                // borderRightColor: "white",
                // borderBottomColor: "#389e0d",
                // borderBottomWidth: 4
              }}
            >
              <NavLink to="/">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
          <Col span={3}>
            <PageHeader style={{ background: "white" }}>
              <br />
              <Menu>
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
              </Menu>
            </PageHeader>
          </Col>
          <Col span={3} />
        </Row>
        <Row>
          <Col span={3} />
          <Col span={18}>
            <PageHeader style={{ background: "#389e0d" }} />
          </Col>
          <Col span={3} />
        </Row>
        <Row>
          <Col span={3} />
          <Col span={18}>
            <h1>Revtek message</h1>
          </Col>
          <Col span={3} />
        </Row>
      </div>
    );
  }
}

//uses withRouter for changing urls if signup page is clicked
export default withRouter(Welcome);
