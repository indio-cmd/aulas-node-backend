//import { useId } from "react"
import SeviceCarro from "../service/carro.js"

class ControllerCarro {

    // Recebimento e a Saida das info
    Buscar(req, res) {

        try {
            const carros = SeviceCarro.Buscar()
            res.send({ message: carros })
        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }
    Detalhe(req, res) {
        try {
            const id = req.params.id

            const carro = SeviceCarro.Detalhe(id)

            res.send({ mensagem: carro })

        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }

    Criar(req, res) {
        //id, marca, ano
        try {

            const { id, marca, ano } = req.body

         SeviceCarro.Criar(id, marca, ano)

            res.status(200).send({ menssagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }

    Alterar(req, res) {
        try {
        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }

    Deletar(req, res) {
        try {
            const id = req.body.id

            SeviceCarro.Deletar(id)

            res.send({ messagem: "Deletado" })

        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }
}

export default new ControllerCarro()