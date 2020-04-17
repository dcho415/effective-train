import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';
import Results from './components/Results';
import ResultsHeading from './components/ResultsHeading';

class App extends Component {
  state = {
    origin: '',
    dest: '',
    depDate: '',
    retDate: '',
    passengers: '', 
    isReturn: false,
    route: '', 
    upDepDate: '',
    upRetDate: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
      e.preventDefault();
      this.resultHeading();
  }

  onSelect = (e) => this.setState({ isReturn: e==="return" });

  resultHeading = () => {
    var updatedRoute = this.state.origin + '>' + this.state.dest;
    this.setState({ route: this.state.isReturn ? updatedRoute + '>' + this.state.origin : updatedRoute });

    this.setState({ upDepDate: "Depart : " + this.state.depDate});
    this.setState({ upRetDate: this.state.isReturn ? "Return : " + this.state.retDate : '' })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search 
          onChange={this.onChange} 
          onSubmit={this.onSubmit} 
          onSelect={this.onSelect} 
        />
        <ResultsHeading 
          route={this.state.route} 
          depDate={this.state.upDepDate}
          retDate={this.state.upRetDate}
        />
      </div>
    );
  }
}

export default App;
