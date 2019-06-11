import React, { Component } from 'react';
import firebase from 'firebase'
import FormItem from 'antd/lib/form/FormItem';
import { Input, Col, Row } from 'antd';

const { TextArea } = Input;


var database = firebase.database()


class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Company: '',
            Contact: '',
            Daily: ''

        }
    }
    writeData = () => {
        database.ref('users/' + userId).set({
            Company: '',
            Contact: '',
            Daily: ''


        })
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(event) {
        alert('Thank you for submitting a Daily Challenge ');
        event.preventDefault();
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log('do validate');


        }
    }

    render() {
        return (
            <div>
                <h1>
                    <Input placeholder="Please enter Company name" value={this.state.Company} onChange={this.handleChange} type='text' name='Company' onKeyDown={this.handleKeyDown} />

                    <Input placeholder="Please enter Company contact information" value={this.state.Contact} onChange={this.handleChange} type='text' name='Contact' onKeyDown={this.handleKeyDown} />
                    <TextArea rows={4} placeholder="Please enter Daily Challenge" value={this.state.Daily} onChange={this.handleChange} type='text' name='Daily' onKeyDown={this.handleKeyDown} />


                </h1>
            </div>

        )
    }

}
export default Challenge