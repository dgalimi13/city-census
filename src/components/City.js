import React from 'react'


const City = (props) => {

console.log(props)
    return (

    <li>
        {props.city.name} - {props.city.population}
    </li>
)

}

export default City