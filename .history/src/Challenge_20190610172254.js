import React, { Component } from 'react';
import firebase from './firebase'
import { Input, Col, Row, Button } from 'antd';

const { TextArea } = Input;


var database = firebase.database()
var challengeRef = database.ref('challenges')

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Company: '',
            Contact: '',
            Daily: ''

        }
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(event) {
        alert('Thank you for submitting a Daily Challenge ');
        event.preventDefault();
        challengeRef.push({
            Company: this.state.Company,
            Contact: this.state.Contact,
            Daily: this.state.Daily
        }
        )
    }






    render() {
        return (
            <div>
                <h1>
                    <Input placeholder="Please enter Company name" value={this.state.Company} onChange={this.handleChange} type='text' name='Company' />
                    <Input placeholder="Please enter Company contact information" value={this.state.Contact} onChange={this.handleChange} type='text' name='Contact' />
                    <TextArea rows={4} placeholder="Please enter Daily Challenge" value={this.state.Daily} onChange={this.handleChange} type='text' name='Daily' />
                    <Button type="primary" onClick={this.handleSubmit}>Submit Daily Challenge</Button>


                </h1>
            </div>

        )
    }

}
export default Challenge