import React from 'react'


const City = (props) => {

    console.log(props)

    let city = props.cities[props.match.params.id -1]

    return (

    <li>
        city
        {city ? city.name : null} - {city ? city.population : null}
    </li>
    )

}

export default City

 