import express from 'express'

import { routes } from './routes.js'

export const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log('Servidor Iniciado com Sucesso!'))