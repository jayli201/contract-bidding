import React, { Component } from "react";
import firebase from "../firebase";
import { Input, Button, message, Row, Col, Divider } from "antd";
import NavbarAd from "./NavbarAd";

const { TextArea } = Input;

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const challengeRef = firebase.database().ref("challenges/");
    let info = {
      name: this.state.name,
      company: this.state.company,
      contact: this.state.contact,
      challenge: this.state.challenge,
      date: this.getDate(),
      time: this.getTime()
    };
    challengeRef.push(info);
    this.setState({
      name: "",
      company: "",
      contact: "",
      challenge: "",
      id: "",
      date: "",
      time: ""
    });
    message.success("Submitted challenge!");
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <NavbarAd />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={8} style={{ textAlign: "left" }}>
            <h2 style={{ textAlign: "left" }}>Submit a challenge</h2>
            <br />
            <Row>
              <Col span={24}>
                <Divider orientation="left">Company name</Divider>
              </Col>
            </Row>
            <Input
              value={this.state.company}
              name="company"
              placeholder="company name"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Row>
              <Col span={24}>
                <Divider orientation="left">Challenge name</Divider>
              </Col>
            </Row>
            <Input
              value={this.state.name}
              name="name"
              placeholder="challenge name"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Row>
              <Col span={24}>
                <Divider orientation="left">Contact info</Divider>
              </Col>
            </Row>
            <Input
              value={this.state.contact}
              name="contact"
              placeholder="contact info"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Row>
              <Col span={24}>
                <Divider orientation="left">Challenge details</Divider>
              </Col>
            </Row>
            <TextArea
              value={this.state.challenge}
              rows={6}
              name="challenge"
              placeholder="challenge details"
              onChange={this.handleChange}
            />
            <br />
            <br />
            <Button onClick={this.handleClick} type="primary">
              Submit
            </Button>
            <br />
            <br />
          </Col>
        </Row>
      </div>
    );
  }
}
export default Challenge;
