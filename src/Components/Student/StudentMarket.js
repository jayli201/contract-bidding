import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, message, Card } from "antd";

class StudentMarket extends React.Component {
  constructor() {
    super();
    this.state = { contracts: [], students: [], disabled: false };

    this.bid = this.bid.bind(this);
  }

  bid = () => {};

  componentDidMount() {
    const contractsRef = firebase.database().ref("contracts");
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let contractsList = [];
      for (let contract in contracts) {
        if (contracts[contract].approved === "true") {
          contractsList.push({
            id: contract,
            name: contracts[contract].name,
            company: contracts[contract].company,
            contract: contracts[contract].details,
            date: contracts[contract].date,
            time: contracts[contract].time,
            students: contracts[contract].students
          });
        }
        this.setState({
          contracts: contractsList
        });
      }
    });
  }

  generateButton = () => {
    this.state.contracts.map(contract => {
      let studentList = [];
      if (contract.students != undefined) {
        const students = Object.values(contract.students);
        for (let i = 0; i < students.length; i++) {
          const student = students[i].student;
          studentList.push(student);
        }
      }
      for (let i = 0; i < studentList.length; i++) {
        const uid = firebase.auth().currentUser.uid;
        if (studentList[i] === uid) {
          console.log("hi");
          this.setState({
            disabled: false
          });
        } else {
          this.setState({
            disabled: true
          });
        }
      }
    });
  };

  render() {
    const { Header } = Layout;

    const contracts = this.state.contracts.map(contract => {
      return (
        <div>
          <Card title={contract.name} bordered={false}>
            <p>Company: {contract.company}</p>
            <p>Details: {contract.contract}</p>
            <p>Date submitted: {contract.date}</p>
            <p>Time submitted: {contract.time}</p>
          </Card>
          {this.state.disabled ? null : (
            <Button
              onClick={() => {
                const userRef = firebase
                  .database()
                  .ref("contracts/" + contract.id + "/students/");
                userRef.push({
                  student: firebase.auth().currentUser.uid
                });
                message.success("Successfully bid!");
              }}
              type="primary"
            >
              Bid
            </Button>
          )}
          <br />
          <br />
        </div>
      );
    });

    return (
      <div>
        <NavbarSt />
        <Row>
          <Col span={6} />
          <Col span={12} style={{ textAlign: "left" }}>
            <br />
            <br />
            <h2>Available contracts</h2>
            <br />
            {contracts}
          </Col>
        </Row>
      </div>
    );
  }
}

export default StudentMarket;
