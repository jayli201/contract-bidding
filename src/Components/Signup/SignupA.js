import React, { Component } from "react";
import firebase from "../firebase.js";

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
      .catch(error => {
        alert(error.message);
      });
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
                admin: true,
                company: false,
                student: false
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
        <input onChange={this.handleChange} value={this.state.email} />
        <input onChange={this.handleChangep} value={this.state.password} />
        <div>
          <button onClick={this.signupAd}>sign up as admin</button>
        </div>
      </div>
    );
  }
}

export default SignupA;
