import { firebaseDatabase } from '../utils/firebaseUtils';

class ProdutoService {

    recuperarPorTiposDePrato(filtro, callback) {
        this.recuperarTodos((produtos) => {
            let produtosFiltrados =
                produtos.filter(
                    (produto) =>
                        produto.Itens_Licitado.toLowerCase().includes(filtro.toLowerCase())
                );
            callback(produtosFiltrados);
        });
    }

    recuperarTodos(callback) {
        firebaseDatabase
            .ref('produtos')
            .on('value', (snapshot) => {
                let produtos = [];
                snapshot.forEach(item => {
                    let produto = item.val();
                    produto.id = item.key;
                    produtos.push(produto);
                });
                callback(produtos);
            });
    }
}

export default ProdutoService;