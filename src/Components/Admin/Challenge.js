import React, { Component } from "react";
import firebase from "../firebase";
import {
  Input,
  Button,
  message,
  Row,
  Col,
  Divider,
  Card,
  Popconfirm
} from "antd";
import NavbarAd from "./NavbarAd";

const { TextArea } = Input;

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const challengeRef = firebase.database().ref("challenges/");
    challengeRef.on("value", snapshot => {
      let challenges = snapshot.val();

      let newState = [];
      for (let challenge in challenges) {
        newState.push({
          name: challenges[challenge].name,
          challenge: challenges[challenge].challenge,
          date: challenges[challenge].date,
          time: challenges[challenge].time,
          pushId: challenges[challenge].pushId
        });
      }
      console.log(newState);
      this.setState({ data: newState });
    });
  }

  handleClick() {
    const challengeRef = firebase.database().ref("challenges/");
    let info = {
      name: this.state.name,
      challenge: this.state.challenge,
      date: this.getDate(),
      time: this.getTime(),
      pushId: ""
    };
    var pushed = challengeRef.push(info);
    var pushId = pushed.key;
    console.log(pushId);
    const specificRef = firebase.database().ref("challenges/" + pushId);
    specificRef.update({
      pushId: pushId
    });
    this.setState({
      name: "",
      challenge: "",
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
    const challenges = this.state.data.map(challenge => {
      return (
        <div className="cards">
          <Card title={challenge.name} bordered={true} style={{ width: 315 }}>
            <p>Challenge details: {challenge.challenge}</p>
            <p>Date submitted: {challenge.date}</p>
            <p>Time submitted: {challenge.time}</p>
            <Popconfirm
              title="Are you sure you want to delete this contract?"
              onConfirm={() => {
                const challengeRef = firebase
                  .database()
                  .ref("challenges/" + challenge.pushId);
                challengeRef.remove();
                message.success("Deleted contract");
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button style={{ marginLeft: 8 }} icon="delete" />
            </Popconfirm>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <NavbarAd />
        <br />
        <br />
        <h2 style={{ textAlign: "center" }}>Submit a challenge</h2>
        <div className="submit">
          <Row>
            <Col span={12}>
              <Divider orientation="left">Title</Divider>
            </Col>
          </Row>
          <Input
            style={{ width: 315 }}
            value={this.state.name}
            name="name"
            placeholder="challenge name"
            onChange={this.handleChange}
          />
          <br />
          <Row>
            <Col span={24}>
              <Divider orientation="left">Challenge details</Divider>
            </Col>
          </Row>
          <TextArea
            style={{ width: 315 }}
            value={this.state.challenge}
            rows={6}
            name="challenge"
            placeholder="challenge details"
            onChange={this.handleChange}
          />
          <br />
          <Button onClick={this.handleClick} type="primary">
            Submit
          </Button>
          <br />
          <br />
        </div>
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <br />
            <h2>Current challenges</h2>
            <div className="cards">{challenges}</div>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Challenge;
