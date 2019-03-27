import React, {Component} from 'react'
import config, {storage} from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)

        this.gravaPortfolio = this.gravaPortfolio.bind(this)
    }

    gravaPortfolio(e) {
        console.log('grava portfolio')
        console.log(this.titulo.value)
        console.log(this.descricao.value)
        console.log(this.imagem.value)
        e.preventDefault()
    }

    render() {
        return (
            <div style={{padding: '100px'}}>
                <h2>Potrfólio - Área Administrativa</h2>
                <form onSubmit={this.gravaPortfolio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Título" 
                        ref={(ref) => this.titulo = ref} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao"
                        ref={(ref) => this.descricao = ref} 
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imagem">Imagem</label>
                        <input type="file" className="form-control" id="imagem"
                        ref={(ref) => this.imagem = ref} 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio