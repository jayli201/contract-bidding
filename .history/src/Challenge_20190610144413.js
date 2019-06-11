import React, { Component } from 'react';
import FormItem from 'antd/lib/form/FormItem';
import { Input, Col, Row } from 'antd';

const InputGroup = Input.Group;



class Challenge extends Component {
    render() {
        return (
            <div>
                <h1>
                    <Input placeholder="Please Enter Company Name" />
                </h1>

            </div>

        )
    }

}
export default Challenge