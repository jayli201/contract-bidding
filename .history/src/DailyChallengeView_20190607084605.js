import React, { Component } from 'react';
import firebase from 'firebase'


class DailyChallengeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: []
        };
    }
    componentDidMount() {
        // // firebase.auth().onAuthStateChanged((user) => {
        //     if (user) {
        //         var userID = firebase.auth.currentUSER.uid;
        //         const userRef = firebase.database
        //     }
        // })

        const fileRef = firebase.storage().ref('Files/');
        const file = fileRef.child('Finalresume.pdf')








        file.getDownloadURL().then((url) => { this.setState({ file: url }) })

    }





    render() {
        return (
            <div>
                <a href={this.state.file}>Visit our HTML tutorial</a>





            </div>


        )
    }

}


export default DailyChallengeView                                                                                                                                      