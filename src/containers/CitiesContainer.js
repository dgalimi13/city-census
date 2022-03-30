import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchCities} from "../actions/fetchCities"
import Cities from '../components/Cities'
import CityInput from '../components/CityInput'
import cityReducer from '../reducers/cityReducer'


class CitiesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCities()
    }

    render () {
        return (
            <div>
                <Route path='/cities/new' component={cityReducer.input/>
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