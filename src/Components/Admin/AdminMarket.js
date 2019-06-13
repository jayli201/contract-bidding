import React from "react";
import NavbarAd from "./NavbarAd";
import firebase from "../firebase.js";
import {
  Layout,
  Button,
  Row,
  Col,
  Card,
  Modal,
  Input,
  Popconfirm,
  message
} from "antd";
import "./Admin.css";

class AdminMarket extends React.Component {
  constructor() {
    super();
    this.state = {
      contracts: [],
      visible: false
    };
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeD = this.handleChangeD.bind(this);
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
      name: "",
      details: ""
    });
  };

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
            time: contracts[contract].time
          });
        }
        this.setState({
          contracts: contractsList
        });
      }
    });
  }

  handleChangeN = evt => {
    evt.preventDefault();
    this.setState({ name: evt.target.value });
  };

  handleChangeD = evt => {
    evt.preventDefault();
    this.setState({ details: evt.target.value });
  };

  render() {
    const { Header } = Layout;
    const { TextArea } = Input;
    const { visible } = this.state;

    return (
      <div>
        <NavbarAd />
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <br />
            <h2>Approved and open contracts</h2>
            <div className="cards">
              {this.state.contracts.map(contract => {
                return (
                  <div className="cards">
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
                        style={{ marginLeft: 8 }}
                        icon="edit"
                        type="primary"
                        onClick={() => {
                          const id = contract.id;
                          this.setState({
                            visible: true,
                            editId: id
                          });
                        }}
                      >
                        Edit
                      </Button>
                      <Modal
                        mask={false}
                        title="Edit contract"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                          <Button key="cancel" onClick={this.handleCancel}>
                            Cancel
                          </Button>,
                          <Button
                            key="submit"
                            type="primary"
                            onClick={() => {
                              const contract = firebase
                                .database()
                                .ref("contracts/" + this.state.editId);
                              contract.update({
                                name: this.state.name,
                                details: this.state.details
                              });
                              this.setState({
                                name: "",
                                details: "",
                                visible: false
                              });
                              message.success("Edited contract!");
                            }}
                          >
                            Submit
                          </Button>
                        ]}
                      >
                        <Input
                          onChange={this.handleChangeN}
                          value={this.state.name}
                          placeholder="enter contract title"
                        />
                        <br />
                        <br />
                        <TextArea
                          rows={5}
                          onChange={this.handleChangeD}
                          value={this.state.details}
                          placeholder="enter contract details"
                        />
                      </Modal>
                      <Popconfirm
                        title="Are you sure you want to delete this contract?"
                        onConfirm={() => {
                          const id = contract.id;
                          const contractRef = firebase
                            .database()
                            .ref("contracts/" + id);
                          contractRef.remove();
                          message.success("Deleted contract");
                        }}
                        okText="Yes"
                        cancelText="No"
                      >
                        <Button style={{ marginLeft: 8 }} icon="delete" />
                      </Popconfirm>
                    </Card>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <br />
      </div>
    );
  }
}

export default AdminMarket;
