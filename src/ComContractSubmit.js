import React from 'react';
import firebase from 'firebase';
import firebaseConfig from './firebase'

export default class ComContractSubmit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            codename : '',
            codecompany : '',
            codedetails : '',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        let nameinput = document.getElementById('name').value
        let companyinput = document.getElementById('company').value
        let detailsinput = document.getElementById('details').value
        console.log(nameinput)
        console.log(companyinput)
        console.log(detailsinput)

        var contractRef = firebase.database().ref('Contracts')
        var userPosted  = contractRef.push({
            name : nameinput,
            company : companyinput,
            details : detailsinput,
        })
    }
    
    
    render() {
        return(
            <div>

        <form onSubmit={this.handleSubmit}>
                <h2>Enter Name: </h2>
                <input type = 'text' id = 'name'/>
                <h2>Enter Company Name: </h2>
                <input type = 'text' id = 'company'/>
                <h2>Enter Contract Details: </h2>
                <input type = 'text' id = 'details'/>
                <h2>Press Submit When Finished </h2>
                <button type = 'button' onClick = {this.handleChange} >Submit</button>
        </form>




            </div>
        )
    }
}