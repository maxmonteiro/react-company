import React, { Component } from "react";
import { auth } from './../firebase-config';

class Login extends Component {
  constructor(props) {
    super(props);

    this.email = null;
    this.senha = null;

    this.autenticaUsuario = this.autenticaUsuario.bind(this);
  }

  autenticaUsuario() {
    auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
    .then(user => {
        console.log('usuario:', user);
    })
    .catch(err => {
        console.log('erro:', err);
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Login</h1>
        <div className="col-md-4 col-md-offset-4">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Senha</label>
            <input type="password" name="senha" ref={ref => this.senha = ref} className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="button" className="btn btn-primary" onClick={this.autenticaUsuario}>Entrar</button>
        </div>
      </div>
    );
  }
}

export default Login;
