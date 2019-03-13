import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Site from "./Site";
import Rodape from "./componentes/Rodape";
import Cabecalho from "./componentes/Cabecalho";
import Inicio from "./componentes/Inicio";
import Servicos from "./componentes/Servicos";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />

          <Route path="/" exact component={Inicio} /> {/* carrega o compoennte com o path exatamente igual */}
          <Route path="/servicos" component={Servicos} />

          <Rodape />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
