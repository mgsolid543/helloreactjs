import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <HelloWorld />
        <HelloWorld />
      </div>
    )
  }
}

export default App;