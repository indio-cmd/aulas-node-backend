import express from "express"
import carros from "../repository/carro.js"

const router = express.Router()
// buscar todos
router.get("/buscar", (req, res) =>{
res.send({message: carros})

})
// buscar um
router.get("/detalhe:id", (req, res) =>{
const id = req.params.id

const carro = carros.find(it => it.d === id)

res.send({mensagem: carro})

})
// criar
router.post("/criar", (req, res) =>{
    //id, marca, ano
    
    const {id, marca, ano} = req.body

    if (!id || !marca || !ano) {
        res.status(200).send({messagem: "favor informar todos os dados"})
        return
    }

    carros.push({id, marca, ano })
res.status(200).send({menssagem: "Cadastrado com sucesso"})
})
//alterar
router.post("/alterar", (req, res) =>{})
//deletar
router.post("/deletar", (req, res) =>{
    const id = req.body.id

    carros.splice(id,1)

    res.send({messagem: "Deletado"})
})


export default router