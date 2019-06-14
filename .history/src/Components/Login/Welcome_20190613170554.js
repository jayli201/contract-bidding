import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Row, Col, Button, Layout, PageHeader, Menu } from "antd";
// import "./Welcome.css";

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
    const { Header, Sider, Content, Footer } = Layout;


    //normal rendering for login page
    return (
      <div >
        <Row >
          <Col span={3} />
          <Col span={15}>
            <PageHeader
              className="welcome"
              style={{
                textAlign: "left"
              }}
            >
              <NavLink to="/">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
          {/* <Col span={3}>
            <PageHeader style={{ background: "white" }}>
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
          </Col> */}
        </Row>
        <Row>
          <Col span={3} />
          <Col span={18}>
            <PageHeader />
          </Col>
          <Col span={3} />
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col span={4} />
          <Col span={8}>
            <br />
            <img
              style={{
                height: "45vh"
              }}
              src="/images/image.png"
            />
          </Col>
          <Col span={1} />
          <Col span={7}>
            <h1>Thinking Together</h1>
            <h2>
              RevTek makes communicating easier so you can start focusing on
              projects sooner
            </h2>
            <br />
            <Button
              type="primary"
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              Login
            </Button>
            <br />
            <br />
            <br />
            <br />
            <h2>New to Revtek?</h2>
            <br />
            <div>
              <Button
                onClick={() => {
                  this.props.history.push("/signup");
                }}
              >
                Sign up as an admin or company
              </Button>
            </div>
            <br />
            <div>
              <Button
                onClick={() => {
                  this.props.history.push("/signups");
                }}
              >
                Sign up as a student
              </Button>
            </div>
          </Col>
          <Col span={3} />
        </Row>
        <br />
        <br />
        <Footer >
          <br />
          <br />
        </Footer>
      </div>
    );
  }
}

export default withRouter(Welcome);
