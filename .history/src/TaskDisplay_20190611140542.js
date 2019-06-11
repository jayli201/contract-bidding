import React, { Component } from 'react'
import { Checkbox } from 'antd';



class TaskDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true,
            disabled: false
        }
        this.onChange = this.onChange.bind(this);

    }

    toggleChecked() {
        this.setState({ checked: !this.state.checked });
    };


    onChange = checkedValues => {
        console.log('checked = ', checkedValues);

    };


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