import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import Challenge from "./Challenge"
import DailyChallenge from "./DailyChallengeView"

class App extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    this.authListener()
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        {/* {this.state.user ? (<Challenge />) : (<Login />)} */}

        <Challenge />
        <DailyChallenge />
      </div>
    );
  }
}

export default App;
