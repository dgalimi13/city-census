import React from 'react'


const Cities = (props) => {

    return (
        <div>
            {props.cities.map(city => <li key={city.id}>{city.name} - {city.population}</li> )}
        </div>

    )
}

export default Cities