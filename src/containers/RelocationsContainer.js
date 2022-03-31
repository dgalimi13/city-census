import React from 'react'
import RelocationsInput from '../components/RelocationsInput'
import Relocations from '../components/Relocations'

class RelocationsContainer extends React.Component {

render () {
    return (
        <div>
            <RelocationsInput/>
            <Relocations relocations={this.props.city && this.props.city.relocations}/>
        </div>
    )
}


}

export default RelocationsContainer