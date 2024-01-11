import { produtosRepository } from "../repositories/ProdutosRepository.js"

class BuscarProdutoService {
    execute(id) {
        const produto = produtosRepository.buscar(id)

        if(!produto) null

        return produto
    }
}

export const buscarProdutoService = new BuscarProdutoService()