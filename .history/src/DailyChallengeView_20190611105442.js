import React, { Component } from 'react';
import firebase from 'firebase'
import { Table, Divider, Tag } from 'antd';



class DailyChallengeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {

        const challengeRef = firebase.database().ref('challenges/');
        challengeRef.on('value', (snapshot) => {
            let challenges = snapshot.val();
            let newState = [];
            for (let challenge in challenges) {
                newState.push({
                    company: challenges[challenge].company,
                    contact: challenges[challenge].contact,
                    name: challenges[challenge].name,
                    challenge: challenges[challenge].challenge
                });

            }
            console.log(newState)

        }
        )
    }







    render() {
        return (
            <div>
                <Table columns={columns} dataSource={data} />





            </div>


        )
    }

}


export default DailyChallengeView                                                                                                                                      