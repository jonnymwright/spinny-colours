import React, { Component } from 'react';
import { connect } from "react-redux";
import logo from './logo.svg';
import './App.css';

import CompatibilityWrapper from './components/CompatibilityWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" 
          style={{backgroundColor: 'rgb(' + this.props.red + ',' + this.props.green + ',' + this.props.blue + ')'}}>
          <img src={logo} className="App-logo" alt="logo" />
          <CompatibilityWrapper/>
        </header>
      </div>
    );
  }

}

// Transform (0..360] to (0..256] with no awkward wrap-around/overflow
const orientationToBrightness = orientation => {
  orientation = (orientation+360)%360;
  if (orientation > 180) 
    orientation = 360 - orientation;
  orientation = orientation*256/180;
  orientation = Math.round(orientation);
  return orientation;
}
const mapStateToProps = state => (
  {
    red: orientationToBrightness(state.orientation.alpha),
    green: orientationToBrightness(state.orientation.beta),
    blue: orientationToBrightness(state.orientation.gamma)
  }
)

App = connect(mapStateToProps)(App);
export default App;
