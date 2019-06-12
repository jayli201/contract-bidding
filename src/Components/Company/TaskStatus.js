import React from "react";
import firebase from "firebase";
import {
  Row,
  Col,
  Button,
  Input,
  Layout,
  Modal,
  message,
  Card,
  Progress
} from "antd";
import NavbarCo from "./NavbarCo";

export default class TaskStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: [],
      contracts: [],
      visible: false
    };
  }

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      updates: []
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false.task,
      updates: []
    });
  };

  componentDidMount() {
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
            name: contracts[contract].name,
            company: contracts[contract].company,
            contract: contracts[contract].details,
            date: contracts[contract].date,
            time: contracts[contract].time,
            id: contracts[contract].id,
            students: contracts[contract].students,
            pushId: contracts[contract].pushId,
            updates: contracts[contract].updates
          });
        }
        this.setState({
          contracts: contractsList
        });
      }
    });
  }

  render() {
    const { Header, Footer } = Layout;
    const { TextArea } = Input;

    return (
      <div className="all">
        <NavbarCo />
        <br />
        <br />
        <Row style={{ textAlign: "left" }}>
          <Col span={6} />
          <Col span={8}>
            <h2 style={{ textAlign: "left" }}>Status of student tasks</h2>
            <br />
            {this.state.contracts.map(contract => {
              return (
                <div style={{ textAlign: "left" }}>
                  <Card title={contract.name} bordered={false}>
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
                        if (contract.updates != undefined) {
                          this.setState({
                            updates: Object.values(contract.updates)
                          });
                          console.log(contract.updates);
                        }
                      }}
                    >
                      View completed tasks
                    </Button>
                    <Modal
                      mask={false}
                      title="Student updates"
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      onCancel={this.handleCancel}
                    >
                      {console.log(this.state.updates)}
                      {this.state.updates.map(update => {
                        return (
                          <Card title={update.task} bordered={false}>
                            <p>Student: {update.student}</p>
                            <Progress percent={update.finished} />
                          </Card>
                        );
                      })}
                    </Modal>
                  </Card>
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}
