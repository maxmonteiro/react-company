import React, {Component} from 'react'
import config, {storage} from './../firebase-config'

class AdminPortfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{padding: '100px'}}>
                <h2>Potrfólio - Área Administrativa</h2>
                <form>
                    <div className="form-group">
                        <label for="titulo">Título</label>
                        <input type="text" className="form-control" id="titulo" placeholder="Título" />
                    </div>
                    <div className="form-group">
                        <label for="descricao">Descrição</label>
                        <textarea className="form-control" id="descricao"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="imagem">Imagem</label>
                        <input type="file" className="form-control" id="imagem" />
                    </div>
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio