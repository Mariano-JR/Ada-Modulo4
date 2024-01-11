import { Router } from 'express'
import { produtosController } from './controllers/ProdutosController.js'

const routes = new Router()

routes.get('/produtos', produtosController.listar)
routes.get('/produtos/:id', produtosController.buscar)
routes.post('/produtos', produtosController.criar)
routes.put('/produtos/:id', produtosController.editar)
routes.delete('/produtos/:id', produtosController.deletar)

export { routes }