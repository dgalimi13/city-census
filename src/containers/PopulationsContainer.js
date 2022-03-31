import React from 'react'
import PopulationInput from '../components/PopulationInput'
import Populations from '../components/Populations'

class PopulationsContainer extends React.Component {

render () {
    return (
        <div>
            <PopulationInput/>
            <Populations/>
        </div>
    )
}


}

export default PopulationsContainer