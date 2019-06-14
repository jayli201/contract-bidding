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
                <h1>
                    hi
                </h1>
            </div>

        )
    }
}
export default withRouter(About)