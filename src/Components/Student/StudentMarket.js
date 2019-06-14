import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, message, Card } from "antd";
import "./Student.css";

class StudentMarket extends React.Component {
  constructor() {
    super();
    this.state = { contracts: [], students: [] };
  }

  componentDidMount() {
    const contractsRef = firebase.database().ref("contracts");
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let contractsList = [];
      for (let contract in contracts) {
        if (
          contracts[contract].approved === "true" &&
          contracts[contract].closed === "false"
        ) {
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
        <div className="cards" style={{ background: "#white" }}>
          <Card title={contract.name} bordered={true} style={{ width: 315 }}>
            <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
              {contract.contract}
            </p>
            <label className="info">
              <p style={{ fontWeight: "bold" }}>Company:&ensp; </p>
              <p> {contract.company}</p>
            </label>
            <label className="info">
              <p style={{ fontWeight: "bold" }}>Date submitted:&ensp;</p>
              <p> {contract.date}</p>
            </label>
            <label className="info">
              <p style={{ fontWeight: "bold" }}>Time submitted:&ensp;</p>
              <p> {contract.time}</p>
            </label>
            <Button
              onClick={() => {
                let studentList = [];
                if (contract.students != undefined) {
                  const students = Object.values(contract.students);
                  for (let i = 0; i < students.length; i++) {
                    const student = students[i].student;
                    studentList.push(student);
                  }
                }
                let count = 0;
                for (let i = 0; i < studentList.length; i++) {
                  console.log(studentList);
                  console.log(firebase.auth().currentUser.uid);
                  console.log(studentList[i]);
                  if (studentList[i] === firebase.auth().currentUser.uid) {
                    count++;
                  }
                }
                if (count === 0) {
                  const userRef = firebase
                    .database()
                    .ref("contracts/" + contract.id + "/students/");
                  userRef.push({
                    student: firebase.auth().currentUser.uid
                  });
                  message.success("Successfully bid!");
                } else {
                  message.error("Already bid for this contract");
                }
              }}
              type="primary"
            >
              Bid
            </Button>
          </Card>
        </div>
      );
    });

    return (
      <div style={{ background: "white" }}>
        <NavbarSt />
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <h1>All available contracts</h1>
            <div className="cards">{contracts}</div>
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}

export default StudentMarket;
