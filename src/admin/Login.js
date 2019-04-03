import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label forHTML="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label forHTML="exampleInputPassword1">Senha</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-primary">Entrar</button>
        </form>
      </div>
    );
  }
}

export default Login;