import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';



export default class Challenge extends Component {
    constructor(props) {
        super(props)
        this.state = {



        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {

        return (


        )
    }



}

