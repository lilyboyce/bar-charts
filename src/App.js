import React, { Component } from 'react';
import './App.css';

import ChartsPage from './components/ChartsPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChartsPage />
        </header>
      </div>
    );
  }
}

export default App;
