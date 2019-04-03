import React, { Component } from "react";
import { auth } from './../firebase-config';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        autenticado: false,
        logando: false,
        erro: false
    }

    this.email = null;
    this.senha = null;

    this.autenticaUsuario = this.autenticaUsuario.bind(this);
  }

  autenticaUsuario() {
    this.setState({logando: true, erro: false});
    auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
    .then(user => {
        console.log('usuario:', user);
        this.setState({autenticado: true})
    })
    .catch(err => {
        console.log('erro:', err);
        this.setState({erro: true, autenticado: false, logando: false});
    })
  }

  render() {
      // se está logado, redireciona para página inicial admin
      if(this.state.autenticado) {
        return <Redirect to="/admin"></Redirect>
      }
    return (
      <div className="container">
        <h1 className="text-center">Login</h1>
        <div className="col-md-4 col-md-offset-4">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Senha</label>
            <input type="password" name="senha" ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" />
            {this.state.erro && <small id="emailHelp" className="form-text text-muted">Email e/ou senha inválidos.</small>}
          </div>
          <button type="button" disabled={this.state.logando} className="btn btn-primary" onClick={this.autenticaUsuario}>Entrar</button>
        </div>
      </div>
    );
  }
}

export default Login;
