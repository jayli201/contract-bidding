import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import firebase from "../firebase.js";
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
                <h1>
                    About RevTek
                </h1>






            </div>




        )
    }
}
export default withRouter(About)