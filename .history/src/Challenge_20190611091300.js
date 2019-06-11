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
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick() {
        const challengeRef = firebase.database().ref('challenge/');
        this.setState = {
            name: this.state.name,
            contact: this.state.contact,
            challenge: this.state.challenge
        };

        challengeRef.push(this.state);
    }

    handleChange() {
        this.setState({ [this.target.name]: this.target.value });
    }
    render() {

        return (
            <div>
                <Input placeholder="Please Enter Company Name" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Company Name</Button>
                <Input placeholder="Please Enter Company Contact Info" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Contact Info</Button>
                <TextArea rows={6} placeholder="Please Enter Challenge" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Daily Challenge</Button>
            </div>

        )
    }
}
export default Challenge