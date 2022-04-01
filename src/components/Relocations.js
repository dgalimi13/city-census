import React from 'react'
import {connect} from 'react-redux'
import {deleteRelocation} from '../actions/deleteRelocation'

const Relocations = (props) => {

    console.log(props.relocations)

    const handleDelete = (relocation) => {
        props.deleteRelocation(relocation.id, relocation.city_id)
    }

    return (
        <div>
            {props.relocations && props.relocations.map(relocation => 
                <li key={relocation.id}>{relocation.kind} - {relocation.amount} <button onClick={() => handleDelete(relocation)}>Delete</button></li>
                )}
        </div>
    )

}

export default connect(null,{deleteRelocation})(Relocations)