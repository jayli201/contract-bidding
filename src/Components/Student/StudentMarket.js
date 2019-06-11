import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col } from "antd";

class StudentMarket extends React.Component {
  constructor() {
    super();
    this.state = { contracts: [] };

    this.bid = this.bid.bind(this);
  }

  bid = () => {};

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
        console.log(contractsList);
      }
    });
  }

  render() {
    const { Header } = Layout;
    return (
      <div>
        <NavbarSt />
        <Row>
          <Col span={6} />
          <Col span={12} style={{ textAlign: "left" }}>
            <br />
            <br />
            <h2>Available contracts</h2>
            <br />
            {this.state.contracts.map(contract => {
              return (
                <div>
                  <p style={{ fontWeight: "bold" }}>Name: {contract.name}</p>
                  <p>Company: {contract.company}</p>
                  <p>Details: {contract.contract}</p>
                  <p>Date submitted: {contract.date}</p>
                  <p>Time submitted: {contract.time}</p>
                  <Button
                    onClick={() => {
                      const userRef = firebase
                        .database()
                        .ref("contracts/" + contract.id + "/students/");
                      userRef.push({
                        student: firebase.auth().currentUser.uid
                      });
                    }}
                    type="primary"
                  >
                    Bid
                  </Button>
                  <br />
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

export default StudentMarket;
