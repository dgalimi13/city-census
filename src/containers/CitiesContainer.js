import React from 'react'
import {connect} from 'react-redux'
import Cities from '../components/Cities'
import CityInput from '../components/CityInput'


class CitiesContainer extends React.Component {

    render () {
        return (
            <div>
                <CityInput/>
                <Cities/>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        cities: state.cities
}

export default connect(mapStatetoProps)(CitiesContainer)