import { v4 as uuid } from "uuid"

class ProdutosRepository {
    #produtos = [
        {
            id: 'c0afdbde-2180-47c7-9698-4555a34d7905',
            nome: 'Água 500ml',
            preco: 2.99
        },
        {
            id: '70352e81-c00e-4f1f-ba0c-c591e9d7067e',
            nome: 'Refrigerante 300ml',
            preco: 4.99
        }
    ]

    listar() {
        return this.#produtos
    }

    buscar(id) {
        return this.#produtos.find(produto => produto.id === id)
    }

    criar(produto) {
        const id = uuid()
        this.#produtos.push({id, ...produto})
        return produto
    }

    editar(produto) {
        const index = this.#produtos.findIndex(item => item.id === produto.id)
        this.#produtos[index] = produto
        return produto
    }

    deletar(id) {
        const index = this.#produtos.findIndex(produto => produto.id === id)
        this.#produtos.splice(index, 1)
        return this.#produtos
    }
}

const produtosRepository = new ProdutosRepository()

export { produtosRepository }