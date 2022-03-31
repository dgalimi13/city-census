import React from 'react'
// import {Redirect} from 'react-router-dom'


const City = (props) => {

    

    let city = props.cities[props.match.params.id -1]
    console.log(city)

    return (
    <li>
        {/* {city ? null : <Redirect to='/cities'/>} */}
        {city ? city.name : null} - {city ? city.population : null}
    </li>
    )

}

export default City

 