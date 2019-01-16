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

const mapStateToProps = state => (
  {
    red: state.rgb.red,
    green: state.rgb.green,
    blue: state.rgb.blue
  }
)

App = connect(mapStateToProps)(App);
export default App;
