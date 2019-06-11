import React, { Component } from 'react'



class TaskDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: true,
            disabled: false
        }
    }

    toggleChecked() {
        this.setState({ checked: !this.state.checked });
    };

    toggleDisable = () => {
        this.setState({ disabled: !this.state.disabled });
    };
    render() {
        return (
            <div>
                <header> My Tasks</header>
            </div>


        )
    }
}
export default TaskDisplay