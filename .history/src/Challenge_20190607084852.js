import React, { Component } from 'react';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';
import firebase from 'firebase'
import firebaseconfig from './firebase'
import { Progress } from 'antd';
import './Challenge.css'


firebase.initializeApp(firebaseconfig)


class Challenge extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: [],
            fileURL: '',
            percent: 0,


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

    handleUploadSuccess = () => {
        this.setState({
            file: [],
            percent: 100,
        })
        firebase.firebase().ref('Files').child().getDownloadURL()
            .then(url => this.setState({
                imageURL: url
            }))
            .then(url => console.log(url))
    }


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
                        storageRef={firebase.storage().ref('Files')}
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