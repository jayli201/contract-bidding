import React, { Component } from "react";
import firebase from "../firebase.js";
import { Button, Menu, Input, Layout, Icon, Row, Col, PageHeader } from "antd";
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
        console.log(user.user);
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
    this.props.history.push("/");
  };

  render() {
    const { Header } = Layout;

    return (
      <div>
        <Row>
          <Col span={3} />
          <Col span={15}>
            <PageHeader style={{ background: "white", textAlign: "left" }}>
              <img src="images/logo.png" width="175" height="50" />
            </PageHeader>
          </Col>
          <Col span={3}>
            <PageHeader style={{ background: "white" }}>
              <br />
              <Menu>
                <Menu.Item>
                  <NavLink
                    to="/"
                    activeStyle={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    Back to login
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
        <br />
        <br />
        <h1>Register as a new user</h1>
        <br />
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
          style={{ width: 280 }}
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          placeholder="enter email"
        />
        <br />
        <br />
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          style={{ width: 280 }}
          onChange={this.handleChangep}
          value={this.state.password}
          type="password"
          placeholder="enter password"
        />
        <br />
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
            <Button onClick={this.signupSt}>Sign up as student</Button>
          </div>
          <br />
          <br />
          <div>
            <Button onClick={this.back} type="primary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
