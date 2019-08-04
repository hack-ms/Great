import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import fiscal from './fiscal.jpg';
import talheres from './talheres.png';
import Consulta from './Consulta';

class App extends Component {
  render() {
    return (
      <div>

        <div id="banner">
          <img id="logo" src={fiscal} alt="Bandeja" />
          <h1>Fiscaliza!</h1>
        </div>

        <div className="container">

          <div className="row">
            <div id="conteudo" className="col">
              <Consulta />
            </div>
          </div>
         
        </div>

        <div id="rodape">
          &copy;Grupo Great. Todos os direitos reservados.
          &nbsp;
          <img id="imgRodape" src={talheres} alt="Talheres" />
        </div>
      </div>
    );
  }
}

export default App;
