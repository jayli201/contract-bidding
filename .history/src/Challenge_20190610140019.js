import React, { Component } from 'react';
import filepic from './filepic.svg'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase'
import firebaseconfig from './firebase'
import { Progress } from 'antd';
import './Challenge.css'
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
};



export default class Challenge extends Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
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
        const { getFieldDecorator } = this.props.form;

        return (


            <Form.Item {...formItemLayout} label="Company Name">
                {getFieldDecorator('companyname', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input a Company name',
                        },
                    ],
                })(<Input placeholder="Please input the Company name" />)}
            </Form.Item>
        )
    }

}