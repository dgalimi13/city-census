import React from 'react'
// import {Redirect} from 'react-router-dom'
import PopulationsContainer from '../containers/PopulationsContainer'

const City = (props) => {

    

    let city = props.cities[props.match.params.id -1]
    console.log(city)

    return (
        <div>
            <h2>
                {city ? city.name : null} - {city ? city.population : null}
            </h2>
            <PopulationsContainer/>
        </div>
    
    )

}

export default City

 