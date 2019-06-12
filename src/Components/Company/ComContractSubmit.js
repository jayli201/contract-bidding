import React from "react";
import firebase from "firebase";
import { Row, Col, Button, Input, Layout, Divider, message } from "antd";
import NavbarCo from "./NavbarCo";

export default class ComContractSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codename: "",
      codecompany: "",
      codedetails: ""
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const userRef = firebase.database().ref("contracts/");
    console.log(userRef);
    let info = {
      approved: "false",
      closed: "false",
      name: this.state.codename,
      company: this.state.codecompany,
      details: this.state.codedetails,
      date: this.getDate(),
      time: this.getTime(),
      id: firebase.auth().currentUser.uid,
      students: [],
      pushId: ""
    };
    console.log(info);
    var pushed = userRef.push(info);
    var pushId = pushed.key;
    console.log(pushId);
    const contractRef = firebase.database().ref("contracts/" + pushId);
    contractRef.update({
      pushId: pushId
    });
    this.setState({
      codename: "",
      codecompany: "",
      codedetails: ""
    });
    message.success("Submitted contract!");
  }

  getDate = () => {
    var tempDate = new Date();
    var date =
      tempDate.getMonth() +
      1 +
      "/" +
      tempDate.getDate() +
      "/" +
      tempDate.getFullYear();
    const currDate = date;
    return currDate;
  };

  getTime = () => {
    var tempDate = new Date();
    var hour = tempDate.getHours();
    var time = "AM";
    if (hour > 12) {
      hour = hour - 12;
      time = "PM";
    }
    var time =
      hour +
      ":" +
      ((tempDate.getMinutes() < 10 ? "0" : "") + tempDate.getMinutes()) +
      " " +
      time;
    const currTime = time;
    return currTime;
  };

  handleNameChange(event) {
    this.setState({
      codename: event.target.value
    });
    console.log(this.state.codename);
  }

  handleCompanyChange(event) {
    this.setState({
      codecompany: event.target.value
    });
    console.log(this.state.codecompany);
  }

  handleDetailChange(event) {
    this.setState({
      codedetails: event.target.value
    });
    console.log(this.state.codedetails);
  }

  render() {
    const { Header, Footer } = Layout;
    const { TextArea } = Input;

    return (
      <div className="all">
        <NavbarCo />
        <br />
        <br />
        <Row style={{ textAlign: "left" }}>
          <Col span={6} />
          <Col span={8}>
            <h2 style={{ textAlign: "left" }}>Submit a new contract:</h2>
            <br />
            <Row>
              <Col span={24}>
                <Divider orientation="left">Title</Divider>
              </Col>
            </Row>
            <Input
              style={{ textAlign: "left" }}
              onChange={this.handleNameChange}
              value={this.state.codename}
              placeholder="title"
            />
            <br />
            <br />
            <Row>
              <Col span={24}>
                <Divider orientation="left">Company</Divider>
              </Col>
            </Row>
            <Input
              style={{ textAlign: "left" }}
              onChange={this.handleCompanyChange}
              value={this.state.codecompany}
              placeholder="company"
            />
            <br />
            <br />
            <Row>
              <Col span={24}>
                <Divider orientation="left">Details</Divider>
              </Col>
            </Row>
            <TextArea
              rows={5}
              onChange={this.handleDetailChange}
              value={this.state.codedetails}
              placeholder="details"
            />
            <br />
            <br />
            <br />
            <Button type="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
