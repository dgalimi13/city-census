import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCities} from "../actions/fetchCities"
import Cities from '../components/Cities'
import CityInput from '../components/CityInput'
import cityReducer from '../reducers/cityReducer'
import City from '../components/City'
import NavBar from '../components/NavBar'


class CitiesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchCities()
    }

    render () {
        return (
            <div>
                <NavBar/>
                <Switch>
                 <Route path='/cities/new' component={CityInput}/>
                 <Route path='/cities/:id' render={(routerProps) => <City {...routerProps} cities={this.props.cities}/>}/>
                 <Route exact path='/cities' render={(routerProps) => <Cities {...routerProps} cities={this.props.cities}/>}/>
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

