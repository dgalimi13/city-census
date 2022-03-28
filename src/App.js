import React from 'react';
import {connect} from 'react-redux'
import {fetchCities} from './actions/fetchCities'

class App extends React.Component {

  componentDidMount() { 
    this.props.fetchCities({type: 'FETCH_CITIES', payload: {name: 'New York City'}})
    }

  render() { 
    return (
      <div className="App">
        App
      </div>
    );
  } 
}

// const mapStatetoProps = (state) => {
//   return {
//     cities: state.cities
//   }
// } 

export default connect(null, {fetchCities})(App);
