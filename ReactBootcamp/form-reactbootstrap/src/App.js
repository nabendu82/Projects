import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Jumbotron } from 'react-bootstrap';
import FormExample from './components/FormExample';
import FormHorizontal from './components/FormHorizontal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Basic Forms</h1>
        </header>
        <div className="container">
           <h2>Vertical Form</h2>
            <FormExample/>
            <hr/>
            <h2>Horizontal Form</h2>
            <FormHorizontal/> 
        </div>    
      </div>
    );
  }
}

export default App;
