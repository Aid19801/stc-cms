import React, { Component } from 'react';
import GridContainer from './grid-container/grid-container';

import logo from './logo.svg';
import eggtimer from './eggtimer.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoaded: false,
      videos: null
    }
  }

  componentDidMount() {
    this.getDB();
  }

  getDB() {
    fetch('http://localhost:3004/videos/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          videos: json,
          isLoaded: true
        })
      })
  }

  render() {

    const { isLoaded, videos } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">STC CMS Editor</h1>
        </header>
        <p className="App-intro">
          Welcome to the editor for the new STC site.
          Click <code>edit</code> to begin.
        </p>
        
        { isLoaded ? <GridContainer videos={videos} /> : <img alt="" src={eggtimer} width={60} height={60} /> }

      </div>
    );
  }
}

export default App;
