import React from 'react'
import City from './City'


const Cities = (props) => {

    return (
        <div>
            {props.cities.map(city => 
            <li key={city.id}><City/></li> )}
        </div>

    )
}

export default Cities