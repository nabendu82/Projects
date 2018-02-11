import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './firebase';
import FormFirebase from './components/FormFirebase';

class App extends Component {
  state = {
    title: 'Welcome to React',
    suggests: []
  }

  componentDidMount() {
    db
      .doc('users/college')
      .get()
      .then(doc => this.setState({ title: doc.data().name }))

    db
      .collection('suggestions')
      .onSnapshot(coll => 
      {
        const suggests = coll.docs.map(doc =>
        doc.data())
        this.setState({ suggests })
       })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <div className="container">
          <h1>Form with Firebase</h1>
          <ul>
            {this.state.suggests &&
              this.state.suggests.map((topic,index) => (
              <li key={index}>
                {topic.name}   
              </li>
            ))}
          </ul>
          <FormFirebase/>
        </div>
      </div>
    );
  }
}

export default App;
