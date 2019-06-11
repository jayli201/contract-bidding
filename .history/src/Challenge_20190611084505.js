import React, { Component } from 'react';
import firebase from './firebase'
import { Input, Col, Row, Button } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const { TextArea } = Input;


var database = firebase.database()
var challengeRef = database.ref('challenges')

class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            challenge: ''


        }
    }
    render() {

        return (
            <div>
                <Input placeholder="Please Enter Company Name" />
                <Input placeholder="Please Enter Company Contact Info" />
                <Input placeholder="Please Enter Challenge" />
            </div>

        )
    }
}
export default Challenge