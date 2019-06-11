import React, { Component } from "react";
import firebase from "firebase";
import { Table, Divider, Tag } from "antd";
import { Card, Col, Row } from "antd";
import NavbarSt from "./NavbarSt";

class DailyChallengeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.mapChallenges = this.mapChallenges.bind(this);
  }

  componentDidMount() {
    const challengeRef = firebase.database().ref("challenges/");
    challengeRef.on("value", snapshot => {
      let challenges = snapshot.val();
      let newState = [];
      for (let challenge in challenges) {
        newState.push({
          company: challenges[challenge].company,
          contact: challenges[challenge].contact,
          name: challenges[challenge].name,
          challenge: challenges[challenge].challenge,
          date: challenges[challenge].date,
          time: challenges[challenge].time
        });
      }
      console.log(newState);
      this.setState({ data: newState });
    });
  }

  mapChallenges = () => {
    let eachChallenge = this.state.data;

    return eachChallenge.map(challenge => {
      return (
        <div>
          <Card title={challenge.name} bordered={false}>
            <p>Company: {challenge.company}</p>
            <p>Contact: {challenge.contact}</p>
            <p>Challenge: {challenge.challenge}</p>
            <p>Date submitted: {challenge.date}</p>
            <p>Time submitted: {challenge.time}</p>
          </Card>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <NavbarSt />
        <br />
        <br />
        <Row style={{ textAlign: "left" }}>
          <Col span={6} />
          <Col span={12}>
            <h2>Challenges</h2>
            <br />
            {this.mapChallenges()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default DailyChallengeView;
