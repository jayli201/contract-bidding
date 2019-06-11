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

  render() {
    return (
      <div className="App">

        <Challenge />
      </div>
    );
  }
}

export default App;
