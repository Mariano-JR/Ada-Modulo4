import { buscarProdutoService } from "../services/BuscarProdutoService.js"
import { criarProdutoService } from "../services/CriarProdutoService.js"
import { deletarProdutoService } from "../services/DeletarProdutoService.js"
import { editarProdutoService } from "../services/EditarProdutoService.js"
import { listarProdutosService } from "../services/ListarProdutosService.js"

class ProdutosController {
    listar(req , res) {
        const produtos = listarProdutosService.execute()
        return res.send(produtos)
    }

    buscar(req , res) {
        const { id } = req.params
        const produto = buscarProdutoService.execute(id)

        if (!produto) {
            return res.status(404).send({ mensagem: "Produto não encontrado"})
        }

        return res.send(produto)
    }

    criar(req, res) {
        try {
            const produto = criarProdutoService.execute(req.body)
            return res.status(201).send(produto)
        } catch {
            return res.status(500).send({ mensagem: "Erro ao Criar Produto"})
        }
    }

    editar(req , res) {
        const { id } = req.params
        const dadosProduto = req.body
        const produto = { id, ...dadosProduto }
        const produtoEditado = editarProdutoService.execute(produto)

        return res.send(produtoEditado)
    }

    deletar(req , res) {
        try {
            const { id } = req.params
            deletarProdutoService.execute(id)
            return res.status(204).send({ mensagem: "Produto Deletado com Sucesso"})
        } catch {
            return res.status(500).send({ mensagem: "Erro ao Deletar"})
        }
        
    }
}

export const produtosController = new ProdutosController()