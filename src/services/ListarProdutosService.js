import { produtosRepository } from "../repositories/ProdutosRepository.js"

class ListarProdutosService {
    execute() {
        return produtosRepository.listar()
    }
}

export const listarProdutosService = new ListarProdutosService()