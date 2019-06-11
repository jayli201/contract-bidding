import React, { Component } from 'react';
import firebase from 'firebase'
import firebaseConfig from './firebase'
import FormItem from 'antd/lib/form/FormItem';
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


    handleChange = () => {
        this.setState({ [this.target.name]: this.target.value });
    }
    handleSubmit(event) {
        alert('Thank you for submitting a Daily Challenge ');
        event.preventDefault();
        firebase.database().ref('challenges/').push({
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
                    <Button type="primary" onClick={this.handleSubmit}>Submit Daily Challenge</Button>
                    <Input placeholder="Please enter Company contact information" value={this.state.Contact} onChange={this.handleChange} type='text' name='Contact' />
                    <TextArea rows={4} placeholder="Please enter Daily Challenge" value={this.state.Daily} onChange={this.handleChange} type='text' name='Daily' />


                </h1>
            </div>

        )
    }

}
export default Challenge