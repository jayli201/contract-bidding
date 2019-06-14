import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import './About.css'
import {
    Row,
    Col,
    Button,
    Layout,
    PageHeader,
    Menu,
    Divider,
    Icon
} from "antd";


class About extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }



    render() {
        return (

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

                            </Menu>
                        </PageHeader>
                    </Col>
                    <Divider />

                </Row>
                <br />
                <br />
                <br />
                <br />
                <h1 className='about'>About RevTek</h1>
                <p>
                    <p>Our mission is what inspires us to be the top option for students aiming to venture into the field of technology.</p> <br />

                    We create opportunities to network, collaborate, and showcase the diverse talents of our students.<br /> <p> Our company partners
 are carefully selected to match our core values of effort, collaboration, and creativity.</p>         </p>

            </div>


        )
    }
}
export default withRouter(About)