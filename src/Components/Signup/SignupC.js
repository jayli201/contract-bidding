import React, { Component } from "react";
import firebase from "../firebase.js";
import { Button, Form, Input, Layout, Icon } from "antd";
import { Redirect, withRouter } from "react-router-dom";

class SignupC extends Component {
  constructor() {
    super();
    this.signupCo = this.signupCo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangep = this.handleChangep.bind(this);

    this.state = {
      email: "",
      password: ""
    };
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
            this.redirect();
          });
      });
  }

  redirect = () => {
    this.props.history.push("/company");
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
        <h2>Register as a new company</h2>
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
          <Button onClick={this.signupCo} type="primary">
            Sign up as company
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupC);
