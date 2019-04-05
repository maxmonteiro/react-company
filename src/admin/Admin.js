import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { auth } from './../firebase-config';
import { Redirect } from 'react-router-dom'

import AdminMenu from "./AdminMenu";
import AdminPortfolio from "./AdminPortfolio";

class Admin extends Component {
  constructor(props) {
    super(props);
    // estados da autenticação
    this.state = {
      autenticado: false,
      logando: true,
      user: null
    }
  }

  // verificar assim que o estado de autenticação mudar
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        logando: false,
        autenticado: !!user,
        user // parametro igual ao estado, não é necessário user:user
      })
    })
  }

  render() {
    if (this.state.logando) {
      return <p>Aguarde...</p>
    }
    // não está logado
    if (!this.state.autenticado) {
      return <Redirect to="/login"></Redirect>
    }
    return (
      <div>
        <h2>Painel Administrativo</h2>
        <Route path={'/'} component={AdminMenu}></Route>
        <Route path={`${this.props.match.url}/portfolio`} component={AdminPortfolio}></Route>
      </div>
    );
  }
}

export default Admin;
