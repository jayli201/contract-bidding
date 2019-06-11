import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Modal, Divider, Card } from "antd";

class CompanyMarket extends React.Component {
  constructor() {
    super();
    this.state = {
      contracts: [],
      students: [],
      studentInfo: [],
      visible: false
    };
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
    let contractsList = [];
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      for (let contract in contracts) {
        if (
          contracts[contract].id === firebase.auth().currentUser.uid &&
          contracts[contract].approved === "true"
        ) {
          contractsList.push({
            approved: contracts[contract].approved,
            name: contracts[contract].name,
            company: contracts[contract].company,
            contract: contracts[contract].details,
            date: contracts[contract].date,
            time: contracts[contract].time,
            id: contracts[contract].id,
            students: contracts[contract].students
          });
        }
        this.setState({
          contracts: contractsList
        });
      }
    });
  };

  students = () => {
    console.log(this.state.students);
    let studentInfo = [];
    this.state.students.map(student => {
      console.log(student);
      firebase
        .database()
        .ref("users/" + student)
        .on("value", snapshot => {
          let info = snapshot.val();
          console.log(info);
          console.log(info.name);
          studentInfo.push({
            name: info.name,
            email: info.email,
            phone: info.phone,
            github: info.github,
            linkedin: info.linkedin,
            skills: info.skills
          });
          console.log(studentInfo);
        });
    });
    this.setState({
      studentInfo: studentInfo
    });
    console.log(studentInfo);
    console.log(this.state.studentInfo);
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

  render() {
    const { Header } = Layout;
    return (
      <div>
        <NavbarCo />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={12}>
            <h2 style={{ textAlign: "left" }}>Your approved contracts</h2>
            <br />
            {console.log(this.state.contracts)}
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
                      onClick={() => {
                        this.setState({
                          visible: true
                        });
                        let studentList = [];
                        if (contract.students != undefined) {
                          const students = Object.values(contract.students);
                          console.log(students);
                          // console.log(Object.values(contract.students[0]));
                          for (let i = 0; i < students.length; i++) {
                            const student = students[i].student;
                            console.log(student);
                            studentList.push(student);
                            console.log(studentList);
                          }
                        }
                        let studentInfo = [];
                        studentList.map(student => {
                          console.log(student);
                          firebase
                            .database()
                            .ref("users/" + student)
                            .on("value", snapshot => {
                              let info = snapshot.val();
                              console.log(info);
                              console.log(info.name);
                              studentInfo.push({
                                name: info.name,
                                email: info.email,
                                phone: info.phone,
                                github: info.github,
                                linkedin: info.linkedin,
                                skills: info.skills
                              });
                              console.log(studentInfo);
                            });
                        });
                        this.setState({
                          studentInfo: studentInfo
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
                          console.log(Object.values(student));
                          return (
                            <div>
                              <p>Student: {student.name}</p>
                              <p>Skills: {student.skills}</p>
                              <p>Email: {student.email}</p>
                              <Divider />
                            </div>
                          );
                        })}
                      </div>
                    </Modal>
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
