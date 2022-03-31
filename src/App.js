import React from 'react';
import {connect} from 'react-redux'
import CitiesContainer from './containers/CitiesContainer'


class App extends React.Component {

 

  render() { 
    return (
      <div className="App">
        <CitiesContainer/>
      </div>
    );
  } 
}



export default App;