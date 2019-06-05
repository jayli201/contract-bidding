import React, { Component } from "react";
import firebase from "../firebase.js";
import { Button, Form, Input, Layout, Icon } from "antd";
import { Redirect, withRouter } from "react-router-dom";

class SignupA extends Component {
  constructor() {
    super();
    this.signupAd = this.signupAd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangep = this.handleChangep.bind(this);

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
            this.redirect();
          });
      });
  }

  redirect = () => {
    this.props.history.push("/admin");
  };

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

  render() {
    const { Header } = Layout;

    return (
      <div>
        <Header style={{ background: "white", textAlign: "left" }}>
          Revtek
        </Header>
        <h2>Register as a new admin</h2>
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
        <div>
          <Button onClick={this.signupAd} type="primary">
            Sign up as admin
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupA);
