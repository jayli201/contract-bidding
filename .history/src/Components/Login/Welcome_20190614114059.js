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
Collapse

  .parent {
  display: flex;
}

.center {
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  align - items: center;
  justify - content: center;
  margin - left: 580px;
  margin - right: 580px;
  font - family: "Courier Bold", Rockwell, Courier, Georgia, Times,
    "Times New Roman", serif;
  font - weight: bold;
}

.text {
  font - family: "Courier Bold", Rockwell, Courier, Georgia, Times,
    "Times New Roman", serif;
  font - weight: bold;
}

Jasmin Li[11: 27 AM]
#237804

Jasmin Li[11: 40 AM]
Untitled
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
  Icon,
  Dropdown,
  List,
  Typography
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
    const { Header, Sider, Content, Footer } = Layout;
    const dataS = [
      "Bid on contracts",
      "Do daily challenges",
      "Complete company tasks"
    ];
    const dataC = ["Submit contracts", "View students", "Assign company tasks"];
    const dataA = ["Edit contracts", "View students", "Assign challenges"];
    const menu = (
      <Menu
        style={{
          color: "green",
          fontWeight: "bold"
        }}
      >
        <Menu.Item key="0">
          <NavLink to="/signup">As admin or company</NavLink>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          <NavLink to="/signups">As student</NavLink>
        </Menu.Item>
      </Menu>
    );
    //normal rendering for login page
    return (
      <div className="welcome" style={{ background: "white" }}>
        <Row className="welcome">
          <Col span={3} />
          <Col span={12}>
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
          <Col span={7}>
            <PageHeader style={{ background: "white" }}>
              <Menu mode="horizontal" style={{ borderBottom: "transparent" }}>
                <Menu.Item>
                  <NavLink to="/login">LOGIN</NavLink>
                </Menu.Item>
                <Menu.Item>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a className="ant-dropdown-link" href="#">
                      SIGN UP <Icon type="down" />
                    </a>
                  </Dropdown>
                </Menu.Item>
              </Menu>
            </PageHeader>
          </Col>
          <Divider />
        </Row>
        <br />
        <br />
        <Row>
          <div
            className="center"
            style={{
              textAlign: "center",
              fontSize: "35px"
            }}
          >
            <br />
            <label className="title">
              <h1 style={{ fontWeight: "bold" }}>We&ensp;think&ensp; </h1>
              <h1 style={{ color: "#237804", fontWeight: "bold" }}>
                together.
       </h1>
            </label>
            {/* <Icon type="bulb" theme="twoTone" twoToneColor="#52c41a" /> */}
            <br />
          </div>
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
          <Divider />
          {/* <PageHeader style={{ background: "#237804" }} /> */}
          <br />
          <Content>
            <br />
            <Col span={4} />
            <Col span={3}>
              <h2 style={{ color: "#135200", fontWeight: "bold" }}>Student</h2>
              <br />
              <List
                dataSource={dataS}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark /> {item}
                  </List.Item>
                )}
              />
            </Col>
            <Col span={3} />
            <Col span={3}>
              <h2 style={{ color: "#135200", fontWeight: "bold" }}>Company</h2>
              <br />
              <List
                dataSource={dataC}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark /> {item}
                  </List.Item>
                )}
              />
            </Col>
            <Col span={3} />
            <Col span={3}>
              <h2 style={{ color: "#135200", fontWeight: "bold" }}>Admin</h2>
              <br />
              <List
                dataSource={dataA}
                renderItem={item => (
                  <List.Item>
                    <Typography.Text mark /> {item}
                  </List.Item>
                )}
              />
            </Col>
            <Col span={4} />
          </Content>
        </Row>
        <br />
        <br />
      </div>
    );
  }
}
export default withRouter(Welcome);