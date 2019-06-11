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
            Daily: ','

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <h1>
                    <Input placeholder="Please enter Company name" />
                    <Input placeholder="Please enter Company contact information" />
                    <TextArea rows={4} placeholder="Please enter Daily Challenge" />


                </h1>
            </div>

        )
    }

}
export default Challenge