import React from 'react'
import {connect} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
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
                
                <Routes>
                <Route path='/cities/new' element={<CityInput />}></Route>
                <Route path='/cities' element={<Cities cities={this.props.cities} />}>          </Route>
                </Routes>
                

                
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