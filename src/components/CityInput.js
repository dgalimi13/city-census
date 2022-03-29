import React from 'react'

class CityInput extends React.Component {



    render () {
        return (
            <div>
                <form>
                    <label>City Name: </label>
                    <input type='text' placeholder='Name'/>
                    <label>City Population: </label>
                    <input type='text' placeholder='Population'/>
                </form>
            </div>

        )
    }
}

export default CityInput