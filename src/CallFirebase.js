import React, { Component } from 'react'
import firebase from "./firebase.js"





export default class CallFirebase extends Component {
    constructor(props) {
        super(props)
        this.state = {


        }
    }
    handleSubmit = () => {
        firebase.database().ref('files/').set({
            Files: this.state.file,
            Date: this.state.date
        })

    }






    /*handleClick = e => {
        const usersRef = firebase.database().ref('users')
        const user = {
            name: this.state.name
        };
        usersRef.push(user);
    };*/

    render() {
        return (
            <div>

            </div>

        )
    }

}