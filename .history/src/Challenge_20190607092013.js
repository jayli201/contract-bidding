import React, { Component } from 'react';
import filepic from './filepic.svg'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import FileUploader from 'react-firebase-file-uploader';
import firebase from 'firebase'
import firebaseconfig from './firebase'
import { Progress } from 'antd';
import './Challenge.css'


firebase.initializeApp(firebaseconfig)


class Challenge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null


        }
    }



    handleUploadStart = () => {
        this.setState({
            percent: 0
        })
    }
    handleProgress = percent => {
        this.setState({
            percent: percent,
        })
    }

    handleSubmit = () => {
        firebase.database().ref('files/').set({
            Files: this.state.file
        })

    }
    handleUploadSuccess = () => {
        this.setState({
            percent: 100
        })
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                var userID = firebase.auth().currentUser.uid;
                const databaseRef = firebase.database().ref('files/' + userID);
                databaseRef.on('value', (snapshot) => {
                    let users = snapshot.val();
                    let newState = [];
                    for (user in users) {
                        newState.push({
                            File: users[user].file,

                        })
                    }
                    this.setState({ data: newState });
                    console.log(this.state)

                })
            }
        })
    };

    render() {
        const style = {
            height: '100',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'


        }
        console.log(this.state)
        return (
            <div className='dc' style={style}>
                <label className='submitPage'> Daily Challenge Submission </label>
                <p className='progress'>

                    <Progress type="circle" percent={this.state.percent} />


                </p>

                <br />
                <br />
                <br />
                <label style={{ backgroundColor: '#17dd77', color: 'white', padding: 20, borderRadius: 8, pointer: 'cursor' }}>
                    {this.state.file && <embed src={this.state.fileURL} />}
                    <CustomUploadButton className="button"
                        hidden
                        name='File'
                        databaseRef={firebase.database().ref('files')}
                        onUploadStart={this.handleUploadStart}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                        style={{ backgroundColor: '#17dd77', color: "black", padding: 20, borderRadius: 8, }}
                    >
                        Browse Files

                        </CustomUploadButton>
                </label>





            </div>
        )
    }



}
export default Challenge;