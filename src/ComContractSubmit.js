import React from 'react';

export default class ComContractSubmit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value : event.target.value 
        })
        console.log(this.state.value)
    }
    render() {
        return(
            <div>

        <form onSubmit={this.handleSubmit}>
        <h2>Company Name</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <h2>Contract Name</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <h2>Company Details</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <h2>Submit</h2>
        <input type="submit" value="Submit" />
      </form>




            </div>
        )
    }
}