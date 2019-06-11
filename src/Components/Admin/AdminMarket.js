import React from "react";
import NavbarAd from "./NavbarAd";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Divider } from "antd";

class AdminMarket extends React.Component {
  state = { contracts: [] };

  componentDidMount() {
    const contractsRef = firebase.database().ref("contracts");
    contractsRef.on("value", snapshot => {
      let contracts = snapshot.val();
      let contractsList = [];
      for (let contract in contracts) {
        if (contracts[contract].approved === "true") {
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
            <h2 style={{ textAlign: "left" }}>Marketplace</h2>
            <br />
            {this.state.contracts.map(contract => {
              return (
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontWeight: "bold" }}>Name: {contract.name}</p>
                  <p>Company: {contract.company}</p>
                  <p>Details: {contract.contract}</p>
                  <p>Date submitted: {contract.date}</p>
                  <p>Time submitted: {contract.time}</p> <Divider />
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
