import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Drawer } from "antd";

class CompanyMarket extends React.Component {
  constructor() {
    super();
    this.state = {
      contracts: [],
      students: [],
      visible: false
    };
    // this.handleClick = this.handleClick.bind(this);
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

  // students = () => {
  // let studentList = [];
  //   const userRef = firebase.database().ref("contracts/");
  //   userRef.on("value", snapshot => {
  //     let contracts = snapshot.val();
  //     let contractsList = [];
  //     let studentList = [];
  //     for (let contract in contracts) {
  //       if (contracts[contract].students != undefined) {
  //         const students = Object.values(contracts[contract].students);
  //         console.log(students);
  //         for (let i = 0; i < students.length; i++) {
  //           console.log(students[i]);
  //           console.log(students[i].student);
  //           studentList.push(students[i].student);
  //         }
  //       }
  //       this.setState({
  //         contracts: contractsList,
  //         students: studentList
  //       });
  //     }
  //   });
  // };

  // handleClick = () => {
  //   this.setState({
  //     visible: true
  //   });
  //   const userRef = firebase.database().ref("contracts/");
  //   userRef.on("value", snapshot => {
  //     let contracts = snapshot.val();
  //     let studentList = [];
  //     for (let contract in contracts) {
  //       if (contracts[contract].students != undefined) {
  //         const students = Object.values(contracts[contract].students);
  //         console.log(students);
  //         for (let i = 0; i < students.length; i++) {
  //           console.log(students[i]);
  //           console.log(students[i].student);
  //           studentList.push(students[i].student);
  //         }
  //       }
  //       this.setState({
  //         students: studentList
  //       });
  //     }
  //   });
  // };

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
                  <p style={{ fontWeight: "bold" }}>Name: {contract.name}</p>
                  <p>Company: {contract.company}</p>
                  <p>Details: {contract.contract}</p>
                  <p>Date submitted: {contract.date}</p>
                  <p>Time submitted: {contract.time}</p>
                  <div>
                    <Button
                      onClick={() => {
                        this.setState({
                          visible: true
                        });
                        console.log(contract.students);
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

                        this.setState({
                          students: studentList,
                          visible: true
                        });
                      }}
                    >
                      View students
                    </Button>
                    <Drawer
                      title="Bidding students"
                      placement="right"
                      closable={false}
                      onClose={this.onClose}
                      visible={this.state.visible}
                    >
                      {this.state.students.map(student => {
                        return <div>Student: {student}</div>;
                      })}
                    </Drawer>
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
