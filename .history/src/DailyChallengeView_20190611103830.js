import React, { Component } from 'react';
import firebase from 'firebase'
import { Table, Divider, Tag } from 'antd';



class DailyChallengeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: []
        };
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