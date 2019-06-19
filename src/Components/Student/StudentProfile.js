import React from "react";
import NavbarSt from "./NavbarSt";
import firebase from "../firebase.js";
import { Layout, Button, Row, Col, Modal, Input, Card } from "antd";
import "./Student.css";

class StudentProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      info: [],
      visible: false,
      loading: false,
      name: "",
      phone: "",
      github: "",
      linkedin: "",
      skills: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleOk = e => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 500);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const usersRef = firebase.database().ref("users/" + user.uid);
        usersRef.update({
          name: this.state.name,
          phone: this.state.phone,
          github: this.state.github,
          linkedin: this.state.linkedin,
          skills: this.state.skills
        });
      }
      this.setState({
        name: "",
        phone: "",
        github: "",
        linkedin: "",
        skills: ""
      });
      this.setState({
        visible: false
      });
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      name: "",
      phone: "",
      github: "",
      linkedin: "",
      skills: ""
    });
  };

  componentDidMount = () => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          const usersRef = firebase.database().ref("users/" + user.uid);
          usersRef.on("value", snapshot => {
            let infos = snapshot.val();
            console.log(infos);
            this.setState({
              info: infos
            });
            let infoList = [];
            for (let info in infos) {
              infoList.push({
                name: infos[info].name,
                phone: infos[info].phone,
                github: infos[info].github,
                linkedin: infos[info].linkedin,
                skills: infos[info].skills
              });
            }
          });
        }
      })
      .bind(this);
  };

  render() {
    const { visible, loading } = this.state;
    const { TextArea } = Input;
    const { Header } = Layout;

    return (
      <div style={{ background: "white" }}>
        <NavbarSt />
        <br />
        <h1 className="text">Your profile</h1>
        <br />
        <div className="profile">
          <Card
            title={this.state.info.name}
            bordered={true}
            style={{ width: 375, textAlign: "center" }}
          >
            <label className="info">
              <p style={{ fontWeight: "bold" }}>Email:&ensp; </p>
              <p> {this.state.info.email}</p>
            </label>
            <label className="info">
              <p style={{ fontWeight: "bold" }}>Phone:&ensp; </p>
              <p> {this.state.info.phone}</p>
            </label>
            <p className="info">
              <a href={this.state.info.github} target="_blank">
                {this.state.info.github}
              </a>
            </p>
            <p>
              <a href={this.state.info.linkedin} target="_blank">
                {this.state.info.linkedin}
              </a>
            </p>
            <p>
              <p style={{ fontWeight: "bold" }}>Skills:&ensp; </p>
              <p> {this.state.info.skills}</p>
            </p>
            <Button
              icon="edit"
              type="primary"
              onClick={() => {
                this.setState({
                  visible: true
                });
              }}
            >
              Edit
            </Button>
            <Modal
              title="Edit profile"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="enter name"
              />
              <br />
              <br />
              <Input
                type="text"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                placeholder="enter phone"
              />
              <br />
              <br />
              <Input
                type="text"
                name="github"
                onChange={this.handleChange}
                value={this.state.github}
                placeholder="enter github"
              />
              <br />
              <br />
              <Input
                type="text"
                name="linkedin"
                onChange={this.handleChange}
                value={this.state.linkedin}
                placeholder="enter linkedin"
              />
              <br />
              <br />
              <TextArea
                rows={5}
                type="text"
                name="skills"
                onChange={this.handleChange}
                value={this.state.skills}
                placeholder="enter skills"
              />
            </Modal>
          </Card>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default StudentProfile;
