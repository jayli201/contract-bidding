import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import Challenge from "./Challenge"
import DailyChallenge from "./DailyChallengeView"
import DailyChallengeView from './DailyChallengeView';

class App extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="App">

        {/* <Challenge /> */}
        <DailyChallengeView />
      </div>
    );
  }
}

export default App;
