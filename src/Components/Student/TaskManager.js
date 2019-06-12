import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Modal, Input, Card, Checkbox } from "antd";

class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      loading: false,
      contracts: [],
      id: ""
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
          if (Object.values(user.tasks != undefined)) {
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
                time: tasks[task].time
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

  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  render() {
    const { visible, loading } = this.state;
    const { TextArea } = Input;
    const { Header } = Layout;

    const contracts = this.state.contracts.map(contract => {
      return (
        <div>
          <Card title={contract.task} bordered={false}>
            <p>Name: {contract.name}</p>
            <p>Company: {contract.company}</p>
            <p>Details: {contract.contract}</p>
            <Checkbox onChange={this.onChange}>Finished!</Checkbox>

            {/* <p>Date submitted: {contract.date}</p> */}
            {/* <p>Time submitted: {contract.time}</p> */}
          </Card>
        </div>
      );
    });

    return (
      <div>
        <NavbarSt />
        <br />
        <br />
        <Row style={{ textAlign: "left" }}>
          <Col span={6} />
          <Col span={12}>
            <h2>Company tasks</h2>
            <br />
            {contracts}
          </Col>
        </Row>
      </div>
    );
  }
}

export default StudentProfile;
