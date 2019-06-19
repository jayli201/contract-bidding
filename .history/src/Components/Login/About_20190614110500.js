import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";


class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (
            <div>
                <div className="welcome" style={{ background: "white" }}>
                    <Row className="welcome">
                        <Col span={3} />
                        <Col span={15}>
                            <PageHeader
                                className="welcome"
                                style={{
                                    background: "white",
                                    textAlign: "left"
                                }}
                            >
                                <NavLink to="/">
                                    <img src="images/logo.png" width="175" height="50" />
                                </NavLink>
                            </PageHeader>
                        </Col>
                        <Col span={3}>
                            <PageHeader style={{ background: "white" }}>
                                <Menu style={{ borderBottom: "transparent" }}>
                                    <Menu.Item>
                                        <NavLink
                                            to="/login"
                                            style={{
                                                color: "green",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            LOGIN
                  </NavLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <NavLink to="/About" style={{
                                            color: "green",
                                            fontWeight: "bold"
                                        }}>
                                            ABOUT
              </NavLink>
                                    </Menu.Item>
                                </Menu>
                            </PageHeader>
                        </Col>
                        <Divider />

                    </Row>
                </div>

                )
            }
        }
export default withRouter(About)