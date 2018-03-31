import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoaded: false,
      data: null
    }
  }

  componentDidMount() {
    this.getDB();
  }

  getDB() {
    fetch('http://localhost:3004/data/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          data: json,
          isLoaded: true
        })
      })

    console.log('FUBAR: ', this.state);
  }

  render() {

    const { isLoaded } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">STC CMS Editor</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        
        { isLoaded ? <h2>loaded!</h2> : <h4>loading...</h4>}

        <button className="btn btn-warning">click me</button>
      </div>
    );
  }
}

export default App;
