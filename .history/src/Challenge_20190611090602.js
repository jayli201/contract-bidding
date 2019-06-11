import React, { Component } from 'react';
import firebase from './firebase'
import { Input, Col, Row, Button } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

const { TextArea } = Input;


var database = firebase.database()

class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            challenge: ''


        }
    }

    handleClick() {
        const challengeRef = firebase.database().ref('challenge/');
        this.setState = {
            name: this.name,
            contact: this.contact,
            challenge: this.challenge
        };

        challengeRef.push(this.state);
    }
    render() {

        return (
            <div>
                <Input placeholder="Please Enter Company Name" />
                <Button onClick={this.handleClick}>Submit Company Name</Button>
                <Input placeholder="Please Enter Company Contact Info" />
                <Button onClick={this.handleClick}>Submit Contact Info</Button>
                <TextArea rows={6} placeholder="Please Enter Challenge" />
                <Button onClick={this.handleClick}>Submit Daily Challenge</Button>
            </div>

        )
    }
}
export default Challenge