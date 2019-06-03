import React, { Component } from "react";
import firebase from "../firebase.js";

class Signup extends Component {
  constructor() {
    super();
    this.signupAd = this.signupAd.bind(this);
    this.signupCo = this.signupCo.bind(this);
    this.signupSt = this.signupSt.bind(this);
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
      .then(
        firebase.auth().onAuthStateChanged(function(user) {
          console.log(user.uid);
          if (user) {
            // set the initial state
            firebase
              .database()
              .ref("users")
              .child(user.uid)
              .update({
                email: user.email,
                admin: true,
                company: false,
                student: false
              });
          }
        })
      )
      .catch(error => {
        console.log(error);
      });
  }

  signupCo(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        firebase.auth().onAuthStateChanged(function(user) {
          console.log(user.uid);
          if (user) {
            // set the initial state
            firebase
              .database()
              .ref("users")
              .child(user.uid)
              .update({
                email: user.email,
                admin: false,
                company: true,
                student: false
              });
          }
        })
      )
      .catch(error => {
        console.log(error);
      });
  }

  signupSt(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        firebase.auth().onAuthStateChanged(function(user) {
          console.log(user.uid);
          if (user) {
            // set the initial state
            firebase
              .database()
              .ref("users")
              .child(user.uid)
              .update({
                email: user.email,
                admin: false,
                company: false,
                student: true
              });
          }
        })
      )
      .catch(error => {
        console.log(error);
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

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.email} />
        {this.state.email}
        <input onChange={this.handleChangep} value={this.state.password} />
        <button onClick={this.signupAd}>sign up as admin</button>
        <button onClick={this.signupCo}>sign up as company</button>
        <button onClick={this.signupSt}>sign up as student</button>
      </div>
    );
  }
}

export default Signup;
