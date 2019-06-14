import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import firebase from "../firebase.js";
import { Redirect, withRouter } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Form,
  Input,
  Layout,
  Icon,
  message,
  PageHeader,
  Menu,
  Divider
} from "antd";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
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
        this.setState({
          email: "",
          password: ""
        });
        message.error(error.message);
      })
      .then(success => {
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
                if (this.state.type[0] === true) {
                  //if company
                  this.setState({ admin: true });
                } else if (this.state.type[1] === true) {
                  //if admin
                  this.setState({ company: true });
                } else if (this.state.type[9] === true) {
                  //if student
                  this.setState({ student: true });
                }
              });
              console.log(this.state.type);
            }
          }
        });
      });
  }

  //pushes path if signup button is pressed to lead user to signup page
  signup() {
    let path = `signup`;
    this.props.history.push(path);
  }

  signups() {
    let path = "signups";
    this.props.history.push(path);
  }

  render() {
    const { Footer } = Layout;

    console.log(this.state.type);
    if (this.state.admin === true) {
      this.setState({
        admin: false
      });
      this.props.history.push("/approve");
    } else if (this.state.company === true) {
      //if company
      this.setState({
        company: false
      });
      this.props.history.push("/contract");
    } else if (this.state.student === true) {
      this.setState({
        student: false
      });
      this.props.history.push("/smarket");
    }

    const { Header, Sider } = Layout;

    //normal rendering for login page
    return (
      <div class="login">
        <Row>
          <Col span={3} />
          <Col span={15}>
            <PageHeader
              style={{
                background: "#EDF5E0",
                textAlign: "left"
              }}
            >
              <NavLink to="/">
                <img src="images/logo.png" width="175" height="50" />
              </NavLink>
            </PageHeader>
          </Col>
          {/* <Col span={3}>
            <PageHeader style={{ background: "white" }}>
              <br />
              <Menu>
                <Menu.Item>
                  <NavLink
                    to="/signup"
                    style={{
                      color: "green",
                      fontWeight: "bold"
                    }}
                  >
                    SIGN UP
                  </NavLink>
                </Menu.Item>
              </Menu>
            </PageHeader>
          </Col> */}
          <Col span={3} />
        </Row>
        <Row>
          <Col span={3} />
          <Col span={18}>
            <PageHeader />
          </Col>
          <Col span={3} />
        </Row>
        <Row>
          <Col span={2} />
          <Col span={20}>
            <br />
            <br />
            <h1>Login</h1>
            <br />
            <h3>Welcome back! Login to access your dashboard.</h3>
            <br />
            <Form onSubmit={this.login}>
              <Row>
                <Col span={9} />
                <Col span={6}>
                  <Divider orientation="left">Email</Divider>
                </Col>
                <Col span={6} />
              </Row>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                style={{ width: 280 }}
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                type="email"
                name="email"
                placeholder="enter email"
              />
              <br />
              <Row>
                <Col span={9} />
                <Col span={6}>
                  <Divider orientation="left">Password</Divider>
                </Col>
                <Col span={6} />
              </Row>
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                style={{ width: 280 }}
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
                type="password"
                name="password"
                placeholder="enter password"
              />
              <br />
              <br />
              <br />
              <div class="loginbutton">
                <Button onClick={this.login} type="primary">
                  Login
                </Button>
              </div>
              <br />
              <br />
              {/* <h3>New to RevTek?</h3>
              <br />
              <div>
                <Button onClick={this.signup}>
                  Sign up as admin or company
                </Button>
              </div>
              <br />
              <div>
                <Button onClick={this.signups}>Sign up as student</Button>
              </div> */}
            </Form>
          </Col>
          <Col span={2} />
        </Row>
        <br />
        <br />
        {/* <Footer style={{ background: "#EDF5E0" }}>
          <br />
          <br />
          <br />
          <br />
        </Footer> */}
      </div>
    );
  }
}

//uses withRouter for changing urls if signup page is clicked
export default withRouter(Login);
