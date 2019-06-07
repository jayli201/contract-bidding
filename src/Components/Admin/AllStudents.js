import React from "react";
import NavbarAd from "./NavbarAd";
import firebase from "../firebase.js";
import { Drawer, List, Avatar, Divider, Col, Row, Layout } from "antd";

class AllStudents extends React.Component {
  state = { visible: false };

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

  render() {
    const { Header } = Layout;
    const pStyle = {
      fontSize: 16,
      color: "rgba(0,0,0,0.85)",
      lineHeight: "24px",
      display: "block",
      marginBottom: 16
    };

    const DescriptionItem = ({ title, content }) => (
      <div
        style={{
          fontSize: 14,
          lineHeight: "22px",
          marginBottom: 7,
          color: "rgba(0,0,0,0.65)"
        }}
      >
        <p
          style={{
            marginRight: 8,
            display: "inline-block",
            color: "rgba(0,0,0,0.85)"
          }}
        >
          {title}:
        </p>
        {content}
      </div>
    );

    return (
      <div>
        <NavbarAd />
        <br />
        <br />
        <Row>
          <Col span={6} />
          <Col span={12}>
            <h2 style={{ textAlign: "left" }}>All student profiles</h2>
            <br />
            <List
              dataSource={[
                {
                  name: "Lily"
                },
                {
                  name: "Lily"
                }
              ]}
              bordered
              renderItem={item => (
                <List.Item
                  key={item.id}
                  actions={[<a onClick={this.showDrawer}>View Profile</a>]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                    }
                    title={
                      <a href="https://ant.design/index-cn">{item.name}</a>
                    }
                    description="Progresser AFX"
                  />
                </List.Item>
              )}
            />
            <Drawer
              width={640}
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <h1 style={{ ...pStyle, marginBottom: 24 }}>Student Profile</h1>
              <Divider />
              <p style={pStyle}>Personal</p>
              <Row>
                <Col span={24}>
                  <DescriptionItem title="Name" content="Lily" />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <DescriptionItem
                    title="Skills"
                    content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, react, sql, nosql"
                  />
                </Col>
              </Row>
              <Divider />
              <p style={pStyle}>Contacts</p>
              <Row>
                <Col span={12}>
                  <DescriptionItem
                    title="Email"
                    content="AntDesign@example.com"
                  />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="Phone number"
                    content="+86 181 0000 0000"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <DescriptionItem
                    title="Github"
                    content={
                      <a href="http://github.com/ant-design/ant-design/">
                        github.com/ant-design/ant-design/
                      </a>
                    }
                  />
                </Col>
                <Col span={12}>
                  <DescriptionItem
                    title="LinkedIn"
                    content={<a href="http://linkedin.com/">linkedin.com/</a>}
                  />
                </Col>
              </Row>
              <Divider />
            </Drawer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AllStudents;
