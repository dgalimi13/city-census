import React from 'react'
import {connect} from 'react-redux'

import {fetchCities} from "../actions/fetchCities"
import Cities from '../components/Cities'
import CityInput from '../components/CityInput'


class CitiesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCities()
    }

    render () {
        return (
            <div>
                <CityInput/><br/><br/>
                <Cities cities={this.props.cities}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps, {fetchCities})(CitiesContainer)