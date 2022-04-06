import React from 'react'
import RelocationsContainer from '../containers/RelocationsContainer'

const City = (props) => {

    let city = props.cities.filter(city => city.id == props.match.params.id)[0]
    console.log(city)

    return (
        <div className="ShowCity">
            <h2>
                {city ? city.name : null} - {city ? city.population : null}
            </h2>
            <RelocationsContainer city={city}/>
        </div>
    
    )

}

export default City

 