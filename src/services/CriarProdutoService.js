import { produtosRepository } from "../repositories/ProdutosRepository.js"

class CriarProdutoService {
    execute(produto) {
        const novoProduto = produtosRepository.criar(produto)
        return novoProduto
    }
}

export const criarProdutoService = new CriarProdutoService()