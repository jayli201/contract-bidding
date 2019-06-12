import React from "react";
import firebase from "firebase";
import { Row, Col, Button, Input, Layout, Divider, message, Card } from "antd";
import NavbarCo from "./NavbarCo";

export default class TaskStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updates: [],
      contracts: []
    };
  }

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
            <br />
            {this.state.contracts.map(contract => {
              return (
                <div style={{ textAlign: "left" }}>
                  <Card title={contract.name} bordered={false}>
                    <p>Company: {contract.company}</p>
                    <p>Details: {contract.contract}</p>
                    <p>Date submitted: {contract.date}</p>
                    <p>Time submitted: {contract.time}</p>
                    <Button type="primary" onClick={() => {}}>
                      View updates
                    </Button>
                  </Card>
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
