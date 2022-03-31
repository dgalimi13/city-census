import React from 'react'
import {connect} from 'react-redux'
import {Route, Routes} from 'react-router-dom'
import {fetchCities} from "../actions/fetchCities"
import Cities from '../components/Cities'
import CityInput from '../components/CityInput'
import cityReducer from '../reducers/cityReducer'
import City from '../components/City'


class CitiesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCities()
    }

    render () {
        return (
            <div>
                
                
                 <Route path='/cities/new' component={CityInput}/>
                 <Route path='/cities/:id' render={(routerProps) => <City {...routerProps} cities={this.props.cities}/>}/>
                 <Route exact path='/cities' render={(routerProps) => <Cities {...routerProps} cities={this.props.cities}/>}/>
                
                

                
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

