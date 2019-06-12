import React from "react";
import NavbarAd from "./NavbarAd";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Card } from "antd";
import "./Admin.css";

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
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <br />
            <h2>Approved contracts</h2>
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
                    </Card>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AdminMarket;
