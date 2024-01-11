import { produtosRepository } from "../repositories/ProdutosRepository.js"

class EditarProdutoService{
    execute(produto) {
        const produtoExistente = produtosRepository.buscar(produto.id)

        if(!produtoExistente) {
            return null
        }

        return produtosRepository.editar(produto)
    }
}

export const editarProdutoService = new EditarProdutoService()