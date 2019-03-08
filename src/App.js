import React, { Component } from 'react';

import Site from './Site'
import Rodape from './componentes/Rodape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Site />
        <Rodape />
      </div>
    );
  }
}

export default App;
