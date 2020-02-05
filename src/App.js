import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld nama="Irpan" />
        <HelloWorld nama="Budiana" />
        <HelloWorld nama="Lani" />
      </div>
    )
  }
}

export default App;