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
        this.setState(state => ({
            company: state.company,
            contact: state.contact,
            challenge= state.challenge
        })); gff
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {

        return (
            <div>
                <Input value={this.state.contact} name='company' placeholder="Please Enter Company Name" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Company Name</Button>
                <Input value={this.state.contact} name='contact' placeholder="Please Enter Company Contact Info" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Contact Info</Button>
                <TextArea value={this.state.challenge} rows={6} name='challenge' placeholder="Please Enter Challenge" onChange={this.handleChange} />
                <Button onClick={this.handleClick}>Submit Daily Challenge</Button>
            </div>

        )
    }
}
export default Challenge