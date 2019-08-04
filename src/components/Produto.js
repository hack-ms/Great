import React, { Component } from 'react';
import { firebaseStorage } from '../utils/firebaseUtils';

class Produto extends Component {

    constructor(props) {
        super(props);
        this.state = { urlImagem: '' };
    }

    componentDidMount() {
        firebaseStorage
            .ref(`imagens/${this.props.produto.Itens_LicitadoImagem}`)
            .getDownloadURL()
            .then(url => {
                this.setState({ urlImagem: url });
            });
    }

    render() {
        return (
            <div>
              
                <div className="card cardProduto">
                    <div className="card-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    
                                </div>
                                <div className="col-md-8">
                                    <h3>{this.props.produto.Itens_Licitado}</h3>
                                   
                                    <p>
                                        <b>Preço Unitário: R$</b> {this.props.produto.Valor_Total_Realizado}
                                    </p>

                                    <p>
                                        <b>Preço Unitário em SP: R$</b> {this.props.produto.Valor_Total_RealizadoSP}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>

            
                
            
        );     
    }

   
    
}

export default Produto;