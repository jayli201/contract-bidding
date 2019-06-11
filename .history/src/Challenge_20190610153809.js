import React, { Component } from 'react';
import FormItem from 'antd/lib/form/FormItem';
import { Input, Col, Row } from 'antd';

const { TextArea } = Input;




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
    }


    render() {
        return (
            <div>
                <h1>
                    <Input placeholder="Please enter Company name" value={this.state.Company} onChange={this.handleChange} />
                    <Input placeholder="Please enter Company contact information" value={this.state.Contact} onChange={this.handleChange} />
                    <TextArea rows={4} placeholder="Please enter Daily Challenge" value={this.state.Daily} onChange={this.handleChange} />


                </h1>
            </div>

        )
    }

}
export default Challenge