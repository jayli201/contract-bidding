import React from "react";
import firebase from "../firebase.js";
import NavbarCo from "./NavbarCo";
import { Form, Input, Button } from "antd";
import './ComContractSubmit.css';

export default class ComContractSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codename: "",
      codecompany: "",
      codedetails: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    let nameinput = document.getElementById("name").value;
    let companyinput = document.getElementById("company").value;
    let detailsinput = document.getElementById("details").value;
    console.log(nameinput);
    console.log(companyinput);
    console.log(detailsinput);

    var contractRef = firebase.database().ref("Contracts");
    var userPosted = contractRef.push({
      name: nameinput,
      company: companyinput,
      details: detailsinput
    });
  }

  render() {
    return (
      <div>
        <NavbarCo />
        <div className="all">
          <h1>New Contract Submit Form</h1>
          <h2>Enter Name: </h2>
          <Input onChange={this.handleNameChange} value={this.state.codename} />
          <h2>Enter Company Name: </h2>
          <Input
            onChange={this.handleCompanyChange}
            value={this.state.codecompany}
          />
          <h2>Enter Contract Details: </h2>
          <Input
            onChange={this.handleDetailChange}
            value={this.state.codedetails}
          />
          <h2>Press Submit When Finished </h2>
          <Button onClick={this.handleSubmit}> Submit </Button>
        </div>
      </div>
    );
  }
}
