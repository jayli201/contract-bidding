import React from "react";
import NavbarCo from "./NavbarCo";
import firebase from "../firebase.js";
import { Card, Col, Row, Layout } from "antd";
import "./Company.css";

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
        <Row>
          <Col span={3} />
          <Col span={18} style={{ textAlign: "center" }}>
            <br />
            <br />
            <h2>Your students</h2>
            <div className="cards">
              {this.state.info.map(student => {
                return (
                  <div className="cards">
                    <Card
                      title={student.name}
                      bordered={true}
                      style={{ width: 315 }}
                    >
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

export default Profiles;
