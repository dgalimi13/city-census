import React from 'react'
import {connect} from 'react-redux'
import {addCity} from './actions/addCity'

class CityInput extends React.Component {

state = {name: '', population: ''}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefualt()
    this.props.addCity
}

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>City Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>City Population: </label>
                    <input type='text' placeholder='Population' value={this.state.population} name="population" onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>

        )
    }
}

export default connect(null, {addCity})(CityInput)