import React, { Component } from 'react';
import './App.css';
import {details} from './details.json';
import Navigation from './components/Navigation';
import Logic from './components/Logic';
import FormTask from './components/FormTask';

class App extends Component {

  constructor(){
    super();
    this.state={
      details
    }
  }

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <Logic></Logic>
        </div>
    );
  }
}

export default App;
