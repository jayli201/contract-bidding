import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Divider, Col, Row, Layout } from "antd";

class Profiles extends React.Component {
  state = { visible: false, info: [] };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentDidMount() {
    const usersRef = firebase.database().ref("users");
    usersRef.on("value", snapshot => {
      let users = snapshot.val();
      let students = [];
      for (let user in users) {
        if (users[user].student === true) {
          students.push({
            name: users[user].name,
            phone: users[user].phone,
            email: users[user].email,
            github: users[user].github,
            linkedin: users[user].linkedin,
            skills: users[user].skills
          });
        }
        this.setState({
          info: students
        });
      }
    });
  }

  render() {
    console.log(this.state.info);

    const { Header } = Layout;

    return (
      <div>
        <NavbarCo />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={12}>
            <h2 style={{ textAlign: "left" }}>All student profiles</h2>
            <br />
            {this.state.info.map(student => {
              return (
                <div
                  style={{
                    textAlign: "left"
                  }}
                >
                  <p style={{ fontWeight: "bold" }}>Name: {student.name}</p>
                  <p>Email: {student.email}</p>
                  <p>Phone: {student.phone}</p>
                  <p>
                    Github:{" "}
                    <a href={student.github} target="_blank">
                      {student.github}
                    </a>
                  </p>
                  <p>
                    LinkedIn:{" "}
                    <a href={student.linkedin} target="_blank">
                      {student.linkedin}
                    </a>
                  </p>
                  <p>Skills: {student.skills}</p>
                  <Divider />
                </div>
              );
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Profiles;
