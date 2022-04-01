import React from 'react'

const Relocations = (props) => {

    return (
        <div>
            {props.relocations && props.relocations.map(relocation => 
                <li key={relocation.id}>{relocation.kind} - {relocation.amount}</li>
                )}
        </div>
    )

}

export default Relocations