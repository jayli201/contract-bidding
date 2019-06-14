import React, { Component } from "react";
import firebase from "firebase";
import { Table, Divider, Tag, Checkbox } from "antd";
import { Card, Col, Row } from "antd";
import NavbarSt from "./NavbarSt";
import "./Student.css";

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
        <div className="cards">
          <Card style={{ width: 315 }} title={challenge.name} bordered={true}>
            <label className="info">
              <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
                {challenge.challenge}
              </p>
            </label>
            <label className="info">
              <p style={{ fontWeight: "bold" }}>Date submitted:&ensp; </p>
              <p> {challenge.date}</p>
            </label>
            <label className="info">
              <p style={{ fontWeight: "bold" }}>Time submitted:&ensp; </p>
              <p> {challenge.time}</p>
            </label>
            {/* <Checkbox onChange={this.onChange}>Finished!</Checkbox> */}
          </Card>
        </div>
      );
    });
  };

  render() {
    return (
      <div style={{ background: "white" }}>
        <NavbarSt />
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <h1>Challenges</h1>
            <div className="cards">{this.mapChallenges()}</div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default DailyChallengeView;
