import React from 'react'
// import {Redirect} from 'react-router-dom'


const City = (props) => {

    

    let city = props.cities[props.match.params.id -1]
    console.log(city)

    return (
    <h2>
        {/* {city ? null : <Redirect to='/cities'/>} */}
        {city ? city.name : null} - {city ? city.population : null}
    </h2>
    )

}

export default City

 