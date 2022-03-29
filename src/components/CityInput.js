import React from 'react'

class CityInput extends React.Component {

state = {name: '', population: ''}

    render () {
        return (
            <div>
                <form>
                    <label>City Name: </label>
                    <input type='text' placeholder='Name' value={this.state.name}/><br/>
                    <label>City Population: </label>
                    <input type='text' placeholder='Population' value={this.state.population}/>
                </form>
            </div>

        )
    }
}

export default CityInput