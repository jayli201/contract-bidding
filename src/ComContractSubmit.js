import React from 'react';
import firebase from 'firebase';
import firebaseConfig from './firebase';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Input} from 'antd';
import './ComContractSubmit.css'


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));


export default class ComContractSubmit extends React.Component {

    

    constructor(props) {
        super(props)
        

        this.state = {
            codename : '',
            codecompany : '',
            codedetails : '',

        }
        let classes = null;
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleDetailChange = this.handleDetailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {

        var contractRef = firebase.database().ref('Contracts')
        var userPosted  = contractRef.push({
            name : this.state.codename,
            company : this.state.codecompany,
            details : this.state.codedetails,
        })
    }

    handleNameChange(event) {
        this.setState({
            codename : event.target.value
        })
        console.log(this.state.codename)
    }

    handleCompanyChange(event) {
        this.setState({
            codecompany : event.target.value
        })
        console.log(this.state.codecompany)
    }

    handleDetailChange(event) {
        this.setState({
            codedetails : event.target.value
        })
        console.log(this.state.codedetails)
    }

    
    
    render() {
        
        return(
            <div className = 'all'>
            <h1>New Contract Submit Form</h1>
            <h2>Enter Name: </h2>
            <Input onChange = {this.handleNameChange} value = {this.state.codename}/>
            <h2>Enter Company Name: </h2>
            <Input onChange = {this.handleCompanyChange} value = {this.state.codecompany}/>
            <h2>Enter Contract Details: </h2>
            <Input onChange = {this.handleDetailChange} value = {this.state.codedetails}/>
            <h2>Press Submit When Finished </h2>
            <Button onClick = {this.handleSubmit}> Submit </Button>




            </div>
        )
    }
}