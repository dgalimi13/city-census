import React from 'react'

class CityInput extends React.Component {

state = {name: '', population: ''}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

    render () {
        return (
            <div>
                <form>
                    <label>City Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
                    <label>City Population: </label>
                    <input type='text' placeholder='Population' value={this.state.population} name="population" onChange={this.handleChange}/>
                </form>
            </div>

        )
    }
}

export default CityInput