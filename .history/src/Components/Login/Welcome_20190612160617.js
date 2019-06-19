import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Row, Col, Layout, PageHeader, Menu } from "antd";
import { Button } from 'evergreen-ui'


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
              }}
            >
              <NavLink to="/">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
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
            <br />
            <br />
            <h1>Welcome to RevTek</h1>
            <br />
            <Button
              type="primary"
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              Login
            </Button>
          </Col>
          <Col span={3} />
        </Row>
      </div>
    );
  }
}

//uses withRouter for changing urls if signup page is clicked
export default withRouter(Welcome);
