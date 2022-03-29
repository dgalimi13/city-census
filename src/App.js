import React from 'react';
import {connect} from 'react-redux'
import CitiesContainer from './containers/CitiesContainer'


class App extends React.Component {

  componentDidMount() { 
    
    }

  render() { 
    return (
      <div className="App">
        <CitiesContainer/>
      </div>
    );
  } 
}

// const mapStatetoProps = (state) => {
//   return {
//     cities: state.cities
//   }
// } 

export default App;
