import React from 'react'
import {Route, Link} from 'react-router-dom'
import City from './City'


const Cities = (props) => {

    return (
        <div>
            {props.cities.map(city => 
                <li key={city.id}>
                    <Link to={`/cities/${city.id}`}>{city.name}</Link>
                </li> )}
        </div>

    )
}

export default Cities