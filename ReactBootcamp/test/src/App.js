import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Clock from './components/Clock';
import Welcome from './components/Welcome';
import LoginControl from './components/LoginControl';

class App extends Component {

  render() {
    return (
    <div>
      <Header/>
      <Welcome name="Nabendu"/>
      <LoginControl/>
      <Clock/>
      <Footer/>
    </div>
    );
  }
}

export default App;
