import express from "express"
import router from "./router/carro.js"

const app = express()

app.use(express.json())

app.use("/api/v1", router)

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})