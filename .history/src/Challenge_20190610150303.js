import React, { Component } from 'react';
import FormItem from 'antd/lib/form/FormItem';
import { Input, Col, Row } from 'antd';

const { TextArea } = Input;



this.handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Company: '',
            Contact: '',
            Daily: ','

        }
    }
    render() {
        return (
            <div>
                <h1>
                    <Input placeholder="Please Enter Company Name" onChange={this.handleChange} value={this.state.Company} />
                </h1>
                <Input placeholder="Please Enter Contact Information" onChange={this.handleChange} value={this.state.Contact} />

                <TextArea placeholder="Please submit the Daily Challenge" rows={4} onChange={this.handleChange} value={this.state.Daily} />



            </div>

        )
    }

}
export default Challenge