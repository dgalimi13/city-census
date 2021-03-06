import React from 'react'
import {connect} from 'react-redux'
import {addRelocation} from '../actions/addRelocation'

class RelocationInput extends React.Component {

    state = {
        kind: 'arrival',
        amount: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addRelocation(this.state, this.props.city.id)
        this.setState({
            kind: 'arrival',
            amount: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Relocation Type:</label>
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>departure</option>
                        <option>arrival</option>
                    </select>
                    <label>Relocation amount</label>
                    <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange}></input>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addRelocation})(RelocationInput)