import React, { Component } from "react";
import config, { storage } from "./../firebase-config";

class AdminPortfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gravando: false
    };

    this.gravaPortfolio = this.gravaPortfolio.bind(this);
  }

  gravaPortfolio(e) {
    const itemPortfolio = {
      titulo: this.titulo.value,
      descricao: this.descricao.value,
      image: this.image
    };

    this.setState({ gravando: true });

    const arquivo = itemPortfolio.image.files[0];
    const { name, size, type } = arquivo;
    const ref = storage.ref(name);

    ref.put(arquivo).then(img => {
      img.ref.getDownloadURL().then(downloadURL => {
        const novoPortfolio = {
          titulo: itemPortfolio.titulo,
          descricao: itemPortfolio.descricao,
          image: downloadURL
        };
        config.push("portfolio", {
          data: novoPortfolio
        });
        this.setState({ gravando: false });
      });
    });

    e.preventDefault();
  }

  render() {
    if (this.state.gravando) {
      return (
        <div className="container">
          <p>
            <span className="glyphicon glyphicon-refresh" /> Aguarde...
          </p>
        </div>
      );
    }
    return (
      <div style={{ padding: "100px" }}>
        <h2>Potrfólio - Área Administrativa</h2>
        <form onSubmit={this.gravaPortfolio}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              placeholder="Título"
              ref={ref => (this.titulo = ref)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              className="form-control"
              id="descricao"
              ref={ref => (this.descricao = ref)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              ref={ref => (this.image = ref)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default AdminPortfolio;
