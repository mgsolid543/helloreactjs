import React, { Component } from 'react';
import HelloWorld from './HelloWorld';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld namaDepan="Irpan" namaBelakang="Budiana" />
        <HelloWorld namaDepan="Her" namaBelakang="Lani" />
        <HelloWorld namaDepan="Budi" namaBelakang="Santoso" />
      </div>
    )
  }
}

export default App;