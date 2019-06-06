import React from "react";
import firebase from "firebase";
import { Row, Col, Button, Input, Layout } from "antd";
import NavbarCo from "./NavbarCo";

export default class ComContractSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codename: "",
      codecompany: "",
      codedetails: "",
      loading: false,
      iconLoading: false
    };
    let classes = null;
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleDetailChange = this.handleDetailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    var contractRef = firebase.database().ref("Contracts");
    var userPosted = contractRef.push({
      name: this.state.codename,
      company: this.state.codecompany,
      details: this.state.codedetails
    });
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
    this.setState({
      codename: "",
      codecompany: "",
      codedetails: ""
    });
  }

  handleNameChange(event) {
    this.setState({
      codename: event.target.value
    });
    console.log(this.state.codename);
  }

  handleCompanyChange(event) {
    this.setState({
      codecompany: event.target.value
    });
    console.log(this.state.codecompany);
  }

  handleDetailChange(event) {
    this.setState({
      codedetails: event.target.value
    });
    console.log(this.state.codedetails);
  }

  render() {
    const { Header, Footer } = Layout;
    const { TextArea } = Input;
    const { confirmLoading } = this.state;

    return (
      <div className="all">
        <NavbarCo />
        <br />
        <br />
        <Row style={{ textAlign: "left" }}>
          <Col span={5} />
          <Col span={9}>
            <h2 style={{ textAlign: "left" }}>Submit a new contract:</h2>
            <br />
            <h3 style={{ textAlign: "left" }}>Enter title of contract: </h3>
            <Input
              style={{ textAlign: "left" }}
              onChange={this.handleNameChange}
              value={this.state.codename}
              placeholder="title"
            />
            <br />
            <br />
            <h3 style={{ textAlign: "left" }}>Enter company name: </h3>
            <Input
              style={{ textAlign: "left" }}
              onChange={this.handleCompanyChange}
              value={this.state.codecompany}
              placeholder="company"
            />
            <br />
            <br />
            <h3 style={{ textAlign: "left" }}>Enter contract details: </h3>
            <TextArea
              rows={5}
              onChange={this.handleDetailChange}
              value={this.state.codedetails}
              placeholder="details"
            />
            <br />
            <br />
            <br />
            <Button
              type="primary"
              loading={this.state.loading}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
