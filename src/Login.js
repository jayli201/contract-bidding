import React, { Component } from "react";
import "./App.css";
import firebase from "./firebase.js";
import Signup from "./Signup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      signIn: false
    };
  }

  handleCompany = () => {
    // firebase
    //   .auth()
    //   .currentUser.getIdTokenResult()
    //   .then(idTokenResult => {
    //     // Confirm the user is an Admin.
    //     if (!!idTokenResult.claims.admin) {
    //       // Show admin UI.
    //       showAdminUI();
    //     } else {
    //       // Show regular user UI.
    //       showRegularUI();
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    this.setState({
      signIn: true
    });
  };

  render() {
    return (
      <div>
        {/* handle routing to signup page */}
        <button onClick={this.handleCompany}>sign up</button>
        <Signup />
      </div>
    );
  }
}

export default Login;
