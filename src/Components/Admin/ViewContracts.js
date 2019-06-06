import React, { Component } from "react";
import firebase from "../firebase.js";
import NavbarAd from "./NavbarAd.js";
import { Modal, Button, Row, Col, Layout, Input, Icon, PageHeader } from "antd";

class ViewContracts extends Component {
  constructor() {
    super();
    this.state = {
      contracts: [],
      visible: false,
      loading: false,
      name: "",
      company: "",
      details: "",
      editId: ""
    };
    this.handleChangeN = this.handleChangeN.bind(this);
    this.handleChangeC = this.handleChangeC.bind(this);
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
      company: "",
      details: ""
    });
  };

  componentDidMount() {
    const contractsRef = firebase.database().ref("Contracts");
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let contractsList = [];
      for (let contract in contracts) {
        if (contracts[contract].approved === false) {
          contractsList.push({
            id: contract,
            name: contracts[contract].name,
            company: contracts[contract].company,
            contract: contracts[contract].details
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

  handleChangeC = evt => {
    evt.preventDefault();
    this.setState({ company: evt.target.value });
  };

  handleChangeD = evt => {
    evt.preventDefault();
    this.setState({ details: evt.target.value });
  };

  render() {
    const { Header } = Layout;
    const { visible, loading } = this.state;
    const { TextArea } = Input;

    return (
      <div>
        <NavbarAd />
        <Row>
          <Col span={5} />
          <Col span={16} style={{ textAlign: "left" }}>
            <br />
            <br />
            <h2>Pending contracts</h2>
            <br />
            {this.state.contracts.map(contract => {
              return (
                <div>
                  <p>Name: {contract.name}</p>
                  <p>Company: {contract.company}</p>
                  <p>Details: {contract.contract}</p>
                  <div>
                    <Button
                      icon="check-circle"
                      onClick={() => {
                        const id = contract.id;
                        const contractRef = firebase
                          .database()
                          .ref("Contracts/" + id);
                        contractRef.update({
                          approved: true
                        });
                      }}
                    >
                      Approve
                    </Button>
                    <Button
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
                          loading={loading}
                          onClick={() => {
                            this.setState({ loading: true });
                            setTimeout(() => {
                              this.setState({ loading: false, visible: false });
                            }, 250);
                            const contract = firebase
                              .database()
                              .ref("Contracts/" + this.state.editId);
                            contract.update({
                              name: this.state.name,
                              company: this.state.company,
                              details: this.state.details
                            });
                            this.setState({
                              name: "",
                              company: "",
                              details: ""
                            });
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
                      <Input
                        onChange={this.handleChangeC}
                        value={this.state.company}
                        placeholder="enter company name"
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
                    <Button
                      icon="delete"
                      onClick={() => {
                        const id = contract.id;
                        const contractRef = firebase
                          .database()
                          .ref("Contracts/" + id);
                        contractRef.remove();
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                  <br />
                  <br />
                </div>
              );
            })}
          </Col>
          <Col span={3} />
        </Row>
      </div>
    );
  }
}

export default ViewContracts;
