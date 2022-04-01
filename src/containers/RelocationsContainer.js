import React from 'react'
import RelocationInput from '../components/RelocationInput'
import Relocations from '../components/Relocations'

class RelocationsContainer extends React.Component {

render () {
    return (
        <div>
            <RelocationInput account={this.props.city}/>
            <Relocations relocations={this.props.city && this.props.city.relocations}/>
        </div>
    )
}


}

export default RelocationsContainer