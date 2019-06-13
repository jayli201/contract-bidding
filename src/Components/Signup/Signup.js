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
  message
} from "antd";
import { NavLink, withRouter } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.signupAd = this.signupAd.bind(this);
    this.signupCo = this.signupCo.bind(this);
    this.signupSt = this.signupSt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangep = this.handleChangep.bind(this);
    this.back = this.back.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  signupAd(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        const userRef = user.user;
        //set data into user database
        firebase
          .database()
          .ref("users/" + userRef.uid)
          .set({
            admin: true,
            company: false,
            student: false,
            email: userRef.email
          })
          .then(success => {
            // firebase.auth().signOut();
            console.log(userRef);
            this.props.history.push("/approve");
          });
      })
      .catch(error => {
        message.error(error.message);
      });
  }

  signupCo(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user.user);
        const userRef = user.user;
        //set data into user database
        firebase
          .database()
          .ref("users/" + userRef.uid)
          .set({
            admin: false,
            company: true,
            student: false,
            email: userRef.email
          })
          .then(success => {
            // firebase.auth().signOut();
            console.log(userRef);
            this.props.history.push("/contract");
          });
      })
      .catch(error => {
        message.error(error.message);
      });
  }

  signupSt(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        console.log(user.user);
        const userRef = user.user;
        //set data into user database
        firebase
          .database()
          .ref("users/" + userRef.uid)
          .set({
            admin: false,
            company: false,
            student: true,
            email: userRef.email
          })
          .then(success => {
            // firebase.auth().signOut();
            console.log(userRef);
            this.props.history.push("/marketplace");
          });
      })
      .catch(error => {
        message.error(error.message);
      });
  }

  handleChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  handleChangep(e) {
    this.setState({
      password: e.target.value
    });
  }

  back = () => {
    this.props.history.push("/login");
  };

  render() {
    const { Content } = Layout;

    return (
      <div style={{ background: "#EDF5E0" }}>
        <Row>
          <Col span={3} />
          <Col span={15}>
            <PageHeader style={{ background: "#EDF5E0", textAlign: "left" }}>
              <NavLink to="/">
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
            <h1>Create account</h1>
            <br />
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
              onChange={this.handleChangep}
              value={this.state.password}
              type="password"
              placeholder="enter password"
            />
          </Col>
          <Col span={2} />
        </Row>
        <br />
        <br />
        <div>
          <div>
            <Button onClick={this.signupAd}>Sign up as admin</Button>
            <br />
            <br />
          </div>
          <div>
            <Button onClick={this.signupCo}>Sign up as company</Button>
            <br />
            <br />
          </div>
          <div>
            <Button onClick={this.back} type="primary">
              Cancel
            </Button>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
