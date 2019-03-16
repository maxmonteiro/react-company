import React, { Component } from "react";
import { Route } from 'react-router-dom';

import AdminMenu from "./AdminMenu";
import AdminPortfolio from "./AdminPortfolio";

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Painel Administrativo</h2>
        <Route path={'/'} component={AdminMenu}></Route>
        {/* Exibe o conteudo do props, onde está o obj match usado para construir a rota */}
        {/* <p>{JSON.stringify(this.props)</p> */}
        <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio}></Route>
      </div>
    );
  }
}

export default Admin;
