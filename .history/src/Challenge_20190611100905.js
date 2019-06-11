import React, { Component } from 'react';
import firebase from './firebase'
import { Input, Col, Row, Button } from 'antd';

const { TextArea } = Input;



class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: '',
            challenge: ''


        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);



    }

    handleClick() {
        const challengeRef = firebase.database().ref('challenges/');

        this.setState(state => ({
            company: state.company,
            contact: state.contact,
            challenge: state.challenge

        }));
        challengeRef.push(this.state)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (
            <div>
                <Input value={this.state.company} name='company name' placeholder="Please Enter Company Name" onChange={this.handleChange} />
                <Input value={this.state.contact} name='contact' placeholder="Please Enter Company Contact Info" onChange={this.handleChange} />                <TextArea value={this.state.challenge} rows={6} name='challenge' placeholder="Please Enter Challenge" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Daily Challenge Information</Button>
            </div>

        )
    }
}
export default Challenge