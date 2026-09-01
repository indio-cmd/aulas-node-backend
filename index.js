import express from "express"
import router from "./router/carro.js"
import databate from "./config/databate.js"

const app = express()

app.use(express.json())

app.use("/api/v1", router)

databate.db
    .sync({force: true})
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    }) 
    .catch((e) => [
        console.log(e)
    ])