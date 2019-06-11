import React, { Component } from 'react';
import FormItem from 'antd/lib/form/FormItem';
import { Input, Col, Row } from 'antd';

const { TextArea } = Input;


this.handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

class Challenge extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Input placeholder="Please Enter Company Name" />
                </h1>
                <Input placeholder="Please Enter Contact Information" />

                <TextArea placeholder="Please submit the Daily Challenge" rows={4} />



            </div>

        )
    }

}
export default Challenge