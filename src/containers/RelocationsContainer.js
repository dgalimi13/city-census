import React from 'react'
import RelocationsInput from '../components/RelocationsInput'
import Relocations from '../components/Relocations'

class RelocationsContainer extends React.Component {

render () {
    return (
        <div>
            <RelocationsInput/>
            <Relocations/>
        </div>
    )
}


}

export default RelocationsContainer