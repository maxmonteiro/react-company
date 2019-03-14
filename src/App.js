import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Rodape from './componentes/Rodape';
import Cabecalho from './componentes/Cabecalho';
import Inicio from './componentes/Inicio';
import Servicos from './componentes/Servicos';
import Portfolio from './componentes/Portfolio';
import Precos from './componentes/Precos';
import Contato from './componentes/Contato';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path="/" exact component={Inicio} /> {/* carrega o compoennte com o path exatamente igual */}
          <Route path="/servicos" component={Servicos} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/precos" component={Precos} />
          <Route path="/contato" component={Contato} />

          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
