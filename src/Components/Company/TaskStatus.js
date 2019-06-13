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
  Progress,
  Checkbox
} from "antd";
import NavbarCo from "./NavbarCo";
import TransferList from "antd/lib/transfer/list";

export default class TaskStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: [],
      contracts: [],
      visible: false,
      currentCompany: "",
      force: false
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
          contracts[contract].approved === "true"
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
      <div className="all" style={{ background: "#EDF5E0" }}>
        <NavbarCo />
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <br />
            <h2>Completed student tasks</h2>
            <div className="cards">
              {this.state.contracts.map(contract => {
                return (
                  <div className="cards" style={{ textAlign: "center" }}>
                    <Card
                      title={contract.name}
                      bordered={true}
                      style={{ width: 315 }}
                    >
                      <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
                        {contract.contract}
                      </p>
                      <label className="info">
                        <p style={{ fontWeight: "bold" }}>Company:&ensp; </p>
                        <p> {contract.company}</p>
                      </label>
                      <label className="info">
                        <p style={{ fontWeight: "bold" }}>
                          Date submitted:&ensp;
                        </p>
                        <p> {contract.date}</p>
                      </label>
                      <label className="info">
                        <p style={{ fontWeight: "bold" }}>
                          Time submitted:&ensp;
                        </p>
                        <p> {contract.time}</p>
                      </label>
                      <Button
                        type="primary"
                        onClick={() => {
                          console.log(contract.pushId);
                          this.setState({
                            visible: true,
                            currentCompany: contract.pushId
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
                          console.log(update);
                          console.log(contract);
                          return (
                            <Card title={update.student} bordered={false}>
                              <p>{update.task} </p>
                              <Progress percent={update.finished} />
                              <br />
                              <br />
                              {/* <Checkbox
                                onClick={() => {
                                  const updateRef = firebase
                                    .database()
                                    .ref(
                                      "contracts/" +
                                        this.state.currentCompany +
                                        "/updates/" +
                                        update.pushId
                                    );
                                  console.log(this.state.currentCompany);
                                  console.log(update.pushId);
                                  updateRef.remove();
                                  this.setState({
                                    visible: false
                                  });
                                }}
                              >
                                Dismiss
                              </Checkbox> */}
                            </Card>
                          );
                        })}
                      </Modal>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
