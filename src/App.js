import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
      <h1>Hello World!</h1>
      <h2>Hello Jamar!!!</h2>
      {/* a button that says 'greet'. when clicked displayed hello web students*/}
      <button onClick={this.greet}>Greet</button>
      <div>{this.state.greeting}</div>
      </div>
    );
  }
  greet = () => {
    this.setState({ greeting: 'hello web students'})
  }
}



export default App;
