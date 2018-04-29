import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabs/index';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Accessible react components</h1>
        <Tabs />
      </div>
    );
  }
}

export default App;
