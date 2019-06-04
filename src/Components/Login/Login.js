import React, { Component } from "react";
import firebase from "../firebase.js";
import { Redirect, withRouter } from "react-router-dom";
import { Row, Col, Button, Form, Input, Layout } from "antd";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signupa = this.signupa.bind(this);
    this.signupc = this.signupc.bind(this);
    this.signups = this.signups.bind(this);
    this.state = {
      email: "",
      password: "",
      type: [],
      admin: false,
      company: false,
      student: false
    };
  }

  //login button press takes in email and password
  login(e) {
    e.preventDefault();

    //email and password from state is entered into firebase authentication
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        alert(error.message);
      });

    //pass email and password user enters in form

    //gets database of users
    const usersRef = firebase.database().ref("users");

    //gets user currently logged in
    const user = firebase.auth().currentUser
      ? firebase.auth().currentUser
      : "Reload the Page";

    //on the values of the database of users, get the matching user id to currently logged in user
    usersRef.on("value", snapshot => {
      let items = snapshot.val() || []; //get values of database entry

      const entries = Object.entries(items); //entries gets [uid, array of items]

      //finds if current user id matches any id, if so, appends
      //true/false array of type (admin, student, company)
      for (const [id, fields] of entries) {
        if (id === user.uid) {
          const fieldArray = Object.values(fields);
          console.log(fieldArray);
          this.setState({ type: fieldArray }, () => {
            //sets state to equal true/false array
            if (this.state.type[0].admin === true) {
              //if company
              this.setState({ admin: true });
            } else if (this.state.type[0].company === true) {
              //if admin
              this.setState({ company: true });
            } else if (this.state.type[0].student === true) {
              //if student
              this.setState({ student: true });
            }
          });
        }
      }
    });
  }

  //pushes path if signup button is pressed to lead user to signup page
  signupa() {
    let path = `signupa`;
    this.props.history.push(path);
  }

  signupc() {
    let path = "signupc";
    this.props.history.push(path);
  }

  signups() {
    let path = "signups";
    this.props.history.push(path);
  }

  render() {
    console.log(this.state.type);
    console.log(this.state.type[0]);
    if (this.state.admin === true) {
      this.setState({
        admin: false
      });
      return <Redirect to="/admin" />;
    } else if (this.state.company === true) {
      //if company
      this.setState({
        company: false
      });
      return <Redirect to="/company" />;
    } else if (this.state.student === true) {
      this.setState({
        student: false
      });
      return <Redirect to="/student" />;
    }

    const { Header } = Layout;

    //normal rendering for login page
    return (
      <div class="login">
        <Col span={3} />
        <Header
          style={{ color: "blue", background: "white", textAlign: "left" }}
        >
          Revtek
        </Header>

        <Form onSubmit={this.login}>
          <Input
            style={{ width: 280 }}
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            type="email"
            name="email"
            placeholder="enter email"
          />
          <br />
          <Input
            style={{ width: 280 }}
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            name="password"
            placeholder="enter password"
          />
          <br />
          <div class="loginbutton">
            <Button onClick={this.login}> Login </Button>
          </div>
          <div>
            <Button onClick={this.signupa}> Sign up as admin</Button>
            <Button onClick={this.signupc}> Sign up as company</Button>
            <Button onClick={this.signups}>Sign up as student</Button>
          </div>
        </Form>
      </div>
    );
  }
}

//uses withRouter for changing urls if signup page is clicked
export default withRouter(Login);
