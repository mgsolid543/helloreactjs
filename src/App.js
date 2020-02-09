import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = { 
      siswa: [
        {
          id: 1,
          nama: 'Irpan Budiana',
        },
        {
          id: 2,
          nama: 'Budi Santosa',
        },
        {
          id: 3,
          nama: 'Ahmad Sanusi',
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.siswa.map((dinamis, key)=>
          <div>
            <h3>{dinamis.id}. {dinamis.nama}</h3>
          </div>
          )
        }
        </div>
    )
  }
}

export default App;