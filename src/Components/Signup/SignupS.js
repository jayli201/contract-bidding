import React, { Component } from "react";
import firebase from "../firebase.js";
import {
  Button,
  Menu,
  Input,
  Layout,
  Icon,
  Row,
  Col,
  PageHeader,
  Divider,
  message,
  Card
} from "antd";
import { NavLink, withRouter } from "react-router-dom";

class SignupS extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.back = this.back.bind(this);

    this.state = {
      email: "",
      password: "",
      name: "",
      phone: "",
      github: "",
      linkedin: "",
      skills: ""
    };
  }

  handleClick = () => {
    console.log("hi");
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user.user);
        const userRef = user.user;
        //set data into user database
        firebase
          .database()
          .ref("users/" + user.user.uid)
          .set({
            admin: false,
            company: false,
            student: true,
            email: userRef.email,
            name: this.state.name,
            phone: this.state.phone,
            github: this.state.github,
            linkedin: this.state.linkedin,
            skills: this.state.skills,
            pushId: user.user.uid
          })
          .then(success => {
            console.log(userRef);
            this.setState({
              email: "",
              password: "",
              name: "",
              phone: "",
              github: "",
              linkedin: "",
              skills: ""
            });
            this.props.history.push("/smarket");
          });
      })
      .catch(error => {
        message.error(error.message);
      });
  };

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  back = () => {
    this.props.history.push("/login");
  };

  render() {
    const { TextArea } = Input;

    return (
      <div>
        <Row>
          <Col span={3} />
          <Col span={15}>
            <PageHeader style={{ background: "white", textAlign: "left" }}>
              <NavLink to="/login">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
          {/* <Col span={3}>
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
          </Col> */}
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
          <Col span={2} />
          <Col span={20}>
            <br />
            <br />
            <h1>Create student account</h1>
            <Row>
              <Col span={9} />
              <Col span={6}>
                <Divider orientation="left">Email</Divider>
              </Col>
              <Col span={6} />
            </Row>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              style={{ width: 280 }}
              onChange={this.handleChange}
              name="email"
              value={this.state.email}
              type="email"
              placeholder="enter email"
            />
            <br />
            <Row>
              <Col span={9} />
              <Col span={6}>
                <Divider orientation="left">Password</Divider>
              </Col>
              <Col span={6} />
            </Row>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              style={{ width: 280 }}
              onChange={this.handleChange}
              name="password"
              value={this.state.password}
              type="password"
              placeholder="enter password"
            />
            <br />
            <br />
            <Row>
              <Col span={9} />
              <Col span={6}>
                <Divider orientation="left">Additional info</Divider>
              </Col>
              <Col span={6} />
            </Row>
            <Input
              // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              style={{ width: 280 }}
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
              placeholder="enter name"
            />
            <br />
            <br />
            <Input
              // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              style={{ width: 280 }}
              onChange={this.handleChange}
              name="phone"
              value={this.state.phone}
              placeholder="enter phone"
            />
            <br />
            <br />
            <Input
              // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              style={{ width: 280 }}
              onChange={this.handleChange}
              name="github"
              value={this.state.github}
              placeholder="enter github"
            />
            <br />
            <br />
            <Input
              // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              style={{ width: 280 }}
              onChange={this.handleChange}
              name="linkedin"
              value={this.state.linkedin}
              placeholder="enter linkedin"
            />
            <br />
            <br />
            <TextArea
              rows={5}
              // prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              style={{ width: 280 }}
              onChange={this.handleChange}
              name="skills"
              value={this.state.skills}
              placeholder="enter skills"
            />
          </Col>
        </Row>
        <br />
        <br />
        <div>
          <Button onClick={this.handleClick}>Sign up</Button>
          <div />
          <br />
          <Button onClick={this.back} type="primary">
            Cancel
          </Button>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(SignupS);
