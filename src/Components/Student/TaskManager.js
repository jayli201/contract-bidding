import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Modal, Input, Card, Checkbox } from "antd";
import "./Student.css";

const ButtonGroup = Button.Group;

class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      loading: false,
      contracts: [],
      id: "",
      studentName: ""
    };
  }

  componentDidMount = () => {
    const userRef = firebase.database().ref("users");
    userRef.on("value", snapshot => {
      let users = snapshot.val();
      let contractInfo = [];
      console.log(users);
      for (let user in users) {
        if (users[user].pushId === firebase.auth().currentUser.uid) {
          const studentRef = firebase
            .database()
            .ref("users/" + users[user].pushId);
          studentRef.on("value", snapshot => {
            let student = snapshot.val();
            console.log(student.name);
            this.setState({
              studentName: student.name
            });
          });
          if (
            Object.values(user.tasks != undefined) &&
            users[user].tasks != undefined
          ) {
            const tasks = Object.values(users[user].tasks);
            console.log(tasks);
            for (let task in tasks) {
              console.log(task);
              contractInfo.push({
                task: tasks[task].task,
                name: tasks[task].name,
                company: tasks[task].company,
                contract: tasks[task].details,
                date: tasks[task].date,
                time: tasks[task].time,
                pushId: tasks[task].pushId,
                taskId: tasks[task].taskId,
                finished: tasks[task].finished
              });
              console.log(contractInfo);
              this.setState({
                contracts: contractInfo
              });
            }
          }
        }
      }
    });
  };

  render() {
    const { visible, loading } = this.state;
    const { TextArea } = Input;
    const { Header } = Layout;

    const contracts = this.state.contracts.map(contract => {
      console.log(contract.finished);
      if (contract.finished != 100) {
        return (
          <div className="cards">
            <Card title={contract.task} bordered={true} style={{ width: 315 }}>
              <p>Name: {contract.name}</p>
              <p>Company: {contract.company}</p>
              <p>Details: {contract.contract}</p>
              <div>
                <Checkbox
                  onChange={() => {
                    const taskRef = firebase
                      .database()
                      .ref(
                        "users/" +
                          firebase.auth().currentUser.uid +
                          "/tasks/" +
                          contract.taskId
                      );
                    console.log(contract.taskId);
                    taskRef.update({
                      finished: 100
                    });
                    const contractRef = firebase
                      .database()
                      .ref("contracts/" + contract.pushId + "/updates");
                    contractRef.push({
                      finished: 100,
                      student: this.state.studentName,
                      task: contract.task
                    });
                  }}
                >
                  Finished!
                </Checkbox>
              </div>
            </Card>
          </div>
        );
      }
    });

    return (
      <div>
        <NavbarSt />
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <br />
            <h2>Company tasks</h2>
            <div className="cards">{contracts}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default StudentProfile;
