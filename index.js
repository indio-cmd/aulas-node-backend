import express from "express"
import exercicios from "./router/exercicios.js"

const app = express()

app.use(express.json())

app.use('/api/v1/exercicio', exercicios)

 app.listen(3000, () => {
    console.log("Servidor Rodando")
})