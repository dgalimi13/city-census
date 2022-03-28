import React from 'react';
import {connect} from 'react-redux'

class App extends React.Component {

  componentDidMount() { 
    fetch('http://127.0.0.1:3000/api/v1/cities', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
    }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  } 
}

const mapStatetoProps = (state) => {
return {
  cities: state.cities
}

} 

export default connect(mapStatetoProps, {fetchCities})(App);
