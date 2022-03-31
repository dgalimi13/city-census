import React from 'react'


const City = (props) => {

    console.log(props)

    let city = props.cities[props.match.params.id -1]
    console.log(city)

    return (
    <li>
        {city ? city.name : null} - {city ? city.population : null}
    </li>
    )

}

export default City

 