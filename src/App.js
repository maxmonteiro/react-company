import React, { Component } from 'react';

import Site from './Site'
import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Servicos from './componentes/Servicos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cabecalho />
        <Inicio />
        <Servicos />
        <Site />
        <Rodape />
      </div>
    );
  }
}

export default App;
