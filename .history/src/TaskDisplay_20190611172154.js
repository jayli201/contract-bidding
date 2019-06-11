import React, { Component } from 'react'
import { Checkbox } from 'antd';
import firebase from './firebase'
import { Table } from 'antd'
import DailyChallengeView from './DailyChallengeView'



class TaskDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],

        }

    }





    componentDidMount() {

        const challengeRef = firebase.database().ref('challenges/');
        challengeRef.on('value', (snapshot) => {
            let challenges = snapshot.val();
            console.log(challenges)
            let newState = [];
            for (let challenge in challenges) {
                newState.push({
                    key: challenge,
                    company: challenges[challenge].company,
                    contact: challenges[challenge].contact,
                    name: challenges[challenge].name,
                    challenge: challenges[challenge].challenge,
                    date: challenges[challenge].date,
                    time: challenges[challenge].time

                });

            }
            console.log(newState)
            this.setState({ data: newState })

        }
        )
    }



    render() {
        console.log(this.state.data)

        const columns = [
            {
                title: 'Company Name',
                dataIndex: 'company',
                render: text => <a href="javascript:;">{text}</a>,
            },
            {
                title: 'Challenge',
                dataIndex: 'challenge',
            },
            {
                title: 'Due Date',
                dataIndex: 'date',
            },
            {
                title: 'Time',
                dataIndex: 'time',
            }
        ];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                company: record.company,
            }),
        };

        return (
            <div>
                <header> My Tasks</header>


                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />
                <br />

                {console.log(this.state.data)}
            </div >


        )
    }
}
export default TaskDisplay