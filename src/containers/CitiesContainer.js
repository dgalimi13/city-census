import React from 'react'
import {connect} from 'react-redux'
//import {Route, Routes, useParams} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {fetchCities} from "../actions/fetchCities"
import Cities from '../components/Cities'
import City from '../components/City'
import CityInput from '../components/CityInput'
import cityReducer from '../reducers/cityReducer'


class CitiesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCities()
    }

    render () {
        return (
            <div>
                
                <Switch>
                <Route path='/cities/new' component={CityInput}/>
                
                <Route path='/cities/:id' render={(routerProps) => <City {...routerProps} cities={this.props.cities}/>}/>
                
                <Route exact path='/cities' component={<Cities cities={this.props.cities}/>}/>
                </Switch>
                
                

                
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