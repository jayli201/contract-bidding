import React, { Component } from 'react'
import { Checkbox } from 'antd';
import firebase from './firebase'



class TaskDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true,
            disabled: false,
            data: []
        }
        this.onChange = this.onChange.bind(this);

    }




    onChange = checkedValues => {
        console.log('checked = ', checkedValues);

    };
    componentDidMount() {

        const challengeRef = firebase.database().ref('challenges/');
        challengeRef.on('value', (snapshot) => {
            let challenges = snapshot.val();
            let newState = [];
            for (let challenge in challenges) {
                newState.push({
                    company: challenges[challenge].company,
                    name: challenges[challenge].name,

                });

            }
            console.log(newState)
            this.setState({ data: newState })

        }
        )
    }


    render() {
        return (
            <div>
                <header> My Tasks</header>
                <p>
                    {/* <Checkbox onChange={this.onChange} /> */}
                    <Checkbox.Group options={Options} onChange={this.onChange} />
                    <br />
                </p>
            </div>


        )
    }
}
export default TaskDisplay