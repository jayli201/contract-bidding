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
                <Button>Submit Company Name</Button>
                <Input placeholder="Please Enter Company Contact Info" />
                <Button>Submit Contact Info</Button>
                <TextArea rows={6} placeholder="Please Enter Challenge" />
                <Button>Submit Daily Challenge</Button>
            </div>

        )
    }
}
export default Challenge