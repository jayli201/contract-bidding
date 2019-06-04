import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import Challenge from "./Challenge"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Challenge />
      </div>
    );
  }
}

export default App;
