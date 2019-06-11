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


    onChange = e => {
        console.log('checked = ', e.target.checked);
        this.setState({
            checked: e.target.checked,
        });
    };

    render() {
        return (
            <div>
                <header> My Tasks</header>
                <p><Checkbox onChange={this.onChange} /></p>
            </div>


        )
    }
}
export default TaskDisplay