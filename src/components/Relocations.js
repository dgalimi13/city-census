import React from 'react'
import {connect} from 'react-redux'
import {deleteRelocation} from '../actions/deleteRelocation'

const Relocations = (props) => {

    console.log(props.relocations)

    const handleDelete = () => {

    }

    return (
        <div>
            {props.relocations && props.relocations.map(relocation => 
                <li key={relocation.id}>{relocation.kind} - {relocation.amount}</li>
                )}
        </div>
    )

}

export default connect(null,{deleteRelocation})(Relocations)