import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Results />
      </div>
    );
  }
}

export default App;
