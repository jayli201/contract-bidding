import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import {
  Layout,
  Button,
  Row,
  Col,
  Modal,
  Card,
  Input,
  Popconfirm,
  message
} from "antd";
import "./Company.css";

class CompanyMarket extends React.Component {
  constructor() {
    super();
    this.state = {
      contracts: [],
      students: [],
      studentInfo: [],
      visible: false,
      force: false,
      task: "",
      currentContract: "",
      name: "",
      company: "",
      contract: "",
      date: "",
      time: "",
      pushId: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    const contractsRef = firebase.database().ref("contracts");
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let contractsList = [];
      for (let contract in contracts) {
        if (
          contracts[contract].id === firebase.auth().currentUser.uid &&
          contracts[contract].approved === "true" &&
          contracts[contract].closed === "false"
        ) {
          contractsList.push({
            approved: contracts[contract].approved,
            closed: contracts[contract].closed,
            name: contracts[contract].name,
            company: contracts[contract].company,
            contract: contracts[contract].details,
            date: contracts[contract].date,
            time: contracts[contract].time,
            id: contracts[contract].id,
            students: contracts[contract].students,
            pushId: contracts[contract].pushId
          });
        }
        this.setState({
          contracts: contractsList
        });
      }
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      task: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { Header } = Layout;
    const { TextArea } = Input;

    return (
      <div>
        <NavbarCo />
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <br />
            <h2>Your approved contracts</h2>
            <div className="cards">
              {this.state.contracts.map(contract => {
                return (
                  <div className="cards" style={{ textAlign: "center" }}>
                    <Card
                      title={contract.name}
                      bordered={true}
                      style={{ width: 315 }}
                    >
                      <p>Company: {contract.company}</p>
                      <p>Details: {contract.contract}</p>
                      <p>Date submitted: {contract.date}</p>
                      <p>Time submitted: {contract.time}</p>
                      <Button
                        type="primary"
                        onClick={() => {
                          this.setState({
                            visible: true
                          });
                          let studentList = [];
                          if (contract.students != undefined) {
                            const students = Object.values(contract.students);
                            console.log(students);
                            for (let i = 0; i < students.length; i++) {
                              const student = students[i].student;
                              studentList.push(student);
                            }
                          }
                          console.log(studentList);
                          let studentInfo = [];
                          studentList.map(student => {
                            firebase
                              .database()
                              .ref("users/" + student)
                              .on("value", snapshot => {
                                let info = snapshot.val();
                                console.log(info);
                                studentInfo.push({
                                  name: info.name,
                                  email: info.email,
                                  phone: info.phone,
                                  github: info.github,
                                  linkedin: info.linkedin,
                                  skills: info.skills,
                                  pushId: info.pushId
                                });
                              });
                          });
                          this.setState({
                            studentInfo: studentInfo,
                            currentContract: contract.pushId,
                            name: contract.name,
                            company: contract.company,
                            contract: contract.contract,
                            date: contract.date,
                            time: contract.time,
                            pushId: contract.pushId
                          });
                        }}
                      >
                        View students
                      </Button>
                      <Modal
                        mask={false}
                        title="Students"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                      >
                        <div>
                          {this.state.studentInfo.map(student => {
                            console.log(this.state.contract);
                            return (
                              <Card title={student.name} bordered={false}>
                                <p>Email: {student.email}</p>
                                <p>Phone: {student.phone}</p>
                                <p>
                                  Github:{" "}
                                  <a href={student.github} target="_blank">
                                    {student.github}
                                  </a>
                                </p>
                                <p>
                                  LinkedIn:{" "}
                                  <a href={student.linkedin} target="_blank">
                                    {student.linkedin}
                                  </a>
                                </p>
                                <p>Skills: {student.skills}</p>
                                <TextArea
                                  rows={5}
                                  name="task"
                                  value={this.state.task}
                                  onChange={this.handleChange}
                                />
                                <br />
                                <br />
                                <Button
                                  onClick={() => {
                                    console.log(this.state.task);
                                    console.log(this.state.currentContract);
                                    const studentRef = firebase
                                      .database()
                                      .ref(
                                        "users/" + student.pushId + "/tasks/"
                                      );
                                    console.log(contract);
                                    console.log(contract.name);
                                    console.log(contract.pushId);
                                    let info = {
                                      task: this.state.task,
                                      contract: this.state.currentContract,
                                      name: this.state.name,
                                      company: this.state.company,
                                      details: this.state.contract,
                                      date: this.state.date,
                                      time: this.state.time,
                                      pushId: this.state.pushId,
                                      finished: 0,
                                      taskId: ""
                                    };
                                    var pushed = studentRef.push(info);
                                    var taskId = pushed.key;
                                    const specificRef = firebase
                                      .database()
                                      .ref(
                                        "users/" +
                                          student.pushId +
                                          "/tasks/" +
                                          taskId
                                      );
                                    specificRef.update({
                                      taskId: taskId
                                    });
                                    this.setState({
                                      visible: false,
                                      task: ""
                                    });
                                  }}
                                >
                                  Assign task
                                </Button>
                              </Card>
                            );
                          })}
                        </div>
                      </Modal>
                      <Popconfirm
                        title="Are you sure you want to close this contract?"
                        onConfirm={() => {
                          console.log(contract);
                          firebase
                            .database()
                            .ref("contracts/" + contract.pushId)
                            .update({
                              closed: "true"
                            });
                          this.setState({ force: true });
                          message.success("Closed contract");
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button style={{ marginLeft: 8 }} icon="delete" />
                      </Popconfirm>
                      <br />
                    </Card>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CompanyMarket;
