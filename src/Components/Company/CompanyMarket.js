import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Modal, Card, Input } from "antd";

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
      time: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

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
      visible: false
    });
  };

  handleChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  render() {
    const { Header } = Layout;
    const { TextArea } = Input;

    return (
      <div>
        <NavbarCo />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={12}>
            <h2 style={{ textAlign: "left" }}>
              Your approved and open contracts
            </h2>
            <br />
            {this.state.contracts.map(contract => {
              return (
                <div style={{ textAlign: "left" }}>
                  <Card title={contract.name} bordered={false}>
                    <p>Company: {contract.company}</p>
                    <p>Details: {contract.contract}</p>
                    <p>Date submitted: {contract.date}</p>
                    <p>Time submitted: {contract.time}</p>
                  </Card>
                  <div>
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
                          time: contract.time
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
                                    .ref("users/" + student.pushId + "/tasks/");
                                  console.log(contract);
                                  console.log(contract.name);
                                  console.log(contract.pushId);
                                  studentRef.push({
                                    task: this.state.task,
                                    contract: this.state.currentContract,
                                    name: this.state.name,
                                    company: this.state.company,
                                    details: this.state.contract,
                                    date: this.state.date,
                                    time: this.state.time
                                  });
                                  this.setState({ visible: false });
                                }}
                              >
                                Assign task
                              </Button>
                            </Card>
                          );
                        })}
                      </div>
                    </Modal>
                    <Button
                      onClick={() => {
                        console.log(contract);
                        firebase
                          .database()
                          .ref("contracts/" + contract.pushId)
                          .update({
                            closed: "true"
                          });
                        this.setState({ force: true });
                      }}
                    >
                      Close contract
                    </Button>
                  </div>
                  <br />
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default CompanyMarket;
