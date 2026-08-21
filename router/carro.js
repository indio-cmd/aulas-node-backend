import express from "express"
import ControllerCarro from "../controller/carro.js"

const router = express.Router()
// buscar todos
router.get("/buscar", ControllerCarro.Buscar )
// buscar um
router.get("/detalhe:id", ControllerCarro.Detalhe )
// criar
router.post("/criar", ControllerCarro.Criar )
//alterar
router.post("/alterar", ControllerCarro.Alterar )
//deletar
router.post("/deletar", ControllerCarro.Deletar )


export default router