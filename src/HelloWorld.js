import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
  render() {
    return (
  <div className="warna">Hello {this.props.namaDepan} {this.props.namaBelakang}</div>
    )
  }
}

export default HelloWorld;