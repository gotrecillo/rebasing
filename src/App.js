import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feature1 from './Feature1';
import Feature2 from './Feature2';
import Feature3 from './Feature3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Feature1 />
        <Feature2 />
        <Feature3 />
      </div>
    );
  }
}

export default App;
