import React, { Component } from "react";
import firebase from "../firebase.js";
import { Button, Form, Input } from "antd";

class SignupS extends Component {
  constructor() {
    super();
    this.signupSt = this.signupSt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangep = this.handleChangep.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  signupSt(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        alert(error.message);
      });
    this.assignBool();
  }

  assignBool = () => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          console.log(user.uid);
          const usersRef = firebase.database().ref("users/" + user.uid);

          usersRef.on("value", snapshot => {
            if (snapshot.exists()) {
              console.log("exists");
            } else {
              const bools = {
                email: user.email,
                admin: false,
                company: false,
                student: true
              };
              usersRef.push(bools);
            }
          });
        }
        this.setState({
          email: "",
          password: ""
        });
      })
      .bind(this);
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
    return (
      <div>
        <Input
          style={{ width: 280 }}
          onChange={this.handleChange}
          value={this.state.email}
        />
        <Input
          style={{ width: 280 }}
          onChange={this.handleChangep}
          value={this.state.password}
        />
        <div>
          <Button onClick={this.signupSt}>sign up as student</Button>
        </div>
      </div>
    );
  }
}

export default SignupS;
