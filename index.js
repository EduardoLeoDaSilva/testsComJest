import express from 'express'
import * as dotenv from 'dotenv'
import injectRoutes from './routes/index.js'
dotenv.config()
const app = express()
const porta = 3000
app.use(express.json())

injectRoutes(app)

// app.listen(porta, () => {
//   console.log(`Servidor escutando na porta ${porta}`)
// })

export { app }
