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
            let newState = [];
            for (let challenge in challenges) {
                newState.push({
                    key: challenge,
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



    render() {

        //     const columns = [
        //         {
        //             title: 'Company Name',
        //             dataIndex: 'company',
        //             render: text => <a href="javascript:;">{text}</a>,
        //         },
        //         {
        //             title: 'Challenge',
        //             dataIndex: 'challenge',
        //         },
        //         {
        //             title: 'Due Date',
        //             dataIndex: 'duedate',
        //         },
        //     ];
        //     const data = [
        //         {
        //             key: '1',
        //             name: 'John Brown',
        //             age: 32,
        //             address: 'New York No. 1 Lake Park',
        //         },
        //         {
        //             key: '2',
        //             name: 'Jim Green',
        //             age: 42,
        //             address: 'London No. 1 Lake Park',
        //         },
        //         {
        //             key: '3',
        //             name: 'Joe Black',
        //             age: 32,
        //             address: 'Sidney No. 1 Lake Park',
        //         },
        //         {
        //             key: '4',
        //             name: 'Disabled User',
        //             age: 99,
        //             address: 'Sidney No. 1 Lake Park',
        //         },
        //     ];
        //     const rowSelection = {
        //         onChange: (selectedRowKeys, selectedRows) => {
        //             console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        //         },
        //         getCheckboxProps: record => ({
        //             company: record.company,
        //         }),
        //     };

        return (
            <div>
                {/* <header> My Tasks</header>


        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />                   
         <br />
     */}
            </div >


        )
    }
}
export default TaskDisplay