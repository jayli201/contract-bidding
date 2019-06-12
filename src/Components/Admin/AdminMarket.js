import React from "react";
import NavbarAd from "./NavbarAd";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Card } from "antd";

class AdminMarket extends React.Component {
  state = { contracts: [] };

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

  render() {
    const { Header } = Layout;
    return (
      <div>
        <NavbarAd />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={12}>
            <h2 style={{ textAlign: "left" }}>Approved and open contracts</h2>
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
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AdminMarket;
