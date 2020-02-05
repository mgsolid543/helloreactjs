import React, { Component } from 'react';
import './App.css';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { salam : 'Hello' };
    }

    salamkan = () => {
        this.setState({ salam: 'Hi!'})
    }



  render() {
    return (
        <div className="warna">
            {this.state.salam} {this.props.namaDepan} {this.props.namaBelakang}
            <br/>
            <button onClick={this.salamkan}>Say Hi!</button>
        </div>
    )
  }
}

export default HelloWorld;