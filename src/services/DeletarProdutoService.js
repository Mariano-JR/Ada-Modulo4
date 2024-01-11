import { produtosRepository } from "../repositories/ProdutosRepository.js"

class DeletarProdutoService {
    execute(id) {
        return produtosRepository.deletar(id)
    }
}

export const deletarProdutoService = new DeletarProdutoService()