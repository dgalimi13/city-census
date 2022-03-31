import React from 'react'
import {Route, Link} from 'react-router-dom'
import City from './City'


const Cities = (props) => {

    return (
        <div>
            {props.cities.map(city => 
            <div key={city.id}><City city={city}/></div> )}
        </div>

    )
}

export default Cities