import React, { Component } from "react";
import firebase from "../firebase.js";

class ViewContracts extends Component {
  constructor() {
    super();
    this.state = {
      contracts: []
    };
  }

  componentDidMount() {
    const contractsRef = firebase.database().ref("contracts");
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let contractsList = [];
      for (let contract in contracts) {
        contractsList.push({
          name: contracts[contract].name,
          company: contracts[contract].company,
          contract: contracts[contract].details
        });
      }
      this.setState({
        contracts: contractsList
      });
      console.log(this.state.contracts);
    });
  }

  render() {
    return <div>viewing contracts</div>;
  }
}

export default ViewContracts;
