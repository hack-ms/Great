import React, { Component } from 'react';
import ProdutoService from '../services/ProdutoService';
import Produto from './Produto';

class Consulta extends Component {

    constructor() {
        super();
        this.state = {
            produtos: [],
            filtro: '',
            trouxeResultados: true
        };

        this.service = new ProdutoService();
        /**
         * Isto é necessário para que o método
         * aoCarregarOsProdutos consiga
         * atualizar o estado do componente, no caso,
         * a lista de produtos.
         */
        this.aoCarregarOsProdutos =
            this.aoCarregarOsProdutos.bind(this);
        this.pesquisar = this.pesquisar.bind(this);
        this.aoAlterarValorDoFiltro =
            this.aoAlterarValorDoFiltro.bind(this);
    }

    aoAlterarValorDoFiltro(evento) {
        let valor = evento.target.value;
        this.setState({ filtro: valor });
    }

    pesquisar() {
        let filtro = this.state.filtro.trim();
        if (filtro) {
            this.service
                .recuperarPorTiposDePrato(
                    filtro,
                    (produtos) => {
                        let temResultado = produtos.length > 0;
                        this.setState({
                            produtos: produtos,
                            trouxeResultados: temResultado
                        });
                    }
                );
        } else {
            this.setState({ produtos: [] });
        }
    }

    aoCarregarOsProdutos(produtosRecuperados) {
        this.setState({ produtos: produtosRecuperados });
    }

    render() {
        const listaProdutos =
            this.state.produtos.map(produto => {
                return (
                    <Produto key={produto.id} produto={produto} />
                )
            }); 
        return (
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="input-group">
                            <input
                                value={this.state.filtro}
                                onChange={this.aoAlterarValorDoFiltro}
                                type="text"
                                name="filtro"
                                className="form-control campoConsulta"
                                placeholder="Digite um produto" />
                            <button onClick={this.pesquisar} className="btn btn-secondary">
                                <i className="fas fa-search" />
                            </button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>

                <br />

                {
                    !this.state.trouxeResultados &&
                    <p className="text-center">Nenhum resultado</p>
                }

                {listaProdutos}

               
            </div>



        );
    }
}

export default Consulta; 