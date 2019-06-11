import React, { Component } from 'react';
import firebase from 'firebase'
import { Table, Divider, Tag } from 'antd';
import { Card } from 'antd';



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
            this.setState({ data: newState })

        }
        )
    }
    mapChallenges = () => {
        let eachChallenge = this.state.data

        return eachChallenge.map(
            (challenge) => {
                return <div>
                    <Card title={this.state.data.name} extra={<a href="#">More</a>} style={{ width: 300 }}>
                        <p>{this.state.data.company}</p>
                        <p>{this.state.data.contact}</p>
                        <p>{this.state.data.challenge}</p>
                    </Card>

                </div>
            }
        )
    }







    render() {
        return (
            <div>
                {/* <Table columns={columns} dataSource={data} /> */}





            </div>


        )
    }

}


export default DailyChallengeView                                                                                                                                      