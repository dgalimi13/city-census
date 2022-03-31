import React from 'react'
import {Route, Link} from 'react-router-dom'
import City from './City'


const Cities = (props) => {

    return (
        <div>
            {props.cities.map(city => 
                <div key={city.id}>
                    <Link path={`/accounts/${city.id}`}>{city.name}</Link>
                </div> )}
        </div>

    )
}

export default Cities