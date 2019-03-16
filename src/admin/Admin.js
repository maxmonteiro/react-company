import React, { Component } from "react";
import { Route } from 'react-router-dom'
import AdminMenu from "./AdminMenu";

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Painel Administrativo</h2>
        <Route path={'/'} component={AdminMenu}></Route>
      </div>
    );
  }
}

export default Admin;
