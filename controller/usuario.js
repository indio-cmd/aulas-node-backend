//import { useId } from "react"
import SeviceUsuario from "../service/usuario.js"

class ControllerUsuario {

    // Recebimento e a Saida das info
     async Buscar(req, res) {

        try {
            const usuarios = await SeviceUsuario.Buscar()
            res.send({ message: usuarios })
        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }
   async Detalhe(req, res) {
        try {
            const id = req.params.id

            const usuario = await SeviceUsuario.Detalhe(id)

            res.send({ mensagem: usuario })

        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }

  async  Criar(req, res) {
        //id, marca, ano
        try {

            const {email, senha } = req.body

        await  SeviceUsuario.Criar(email, senha)

            res.status(200).send({ menssagem: "Cadastrado com sucesso" })
        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }

  async Alterar(req, res)  {
try {
    const id = Number(req.params.id)
const {email, senha} = req.body

   
await SeviceUsuario.Alterar(id, email, senha)
  
res.status(201).send({message: "alterado com sucesso"})


} catch (error) {
    res.status(500).send({message: error.message})
}
}
  async  Deletar(req, res) {
        try {
            const id = req.params.id

           await SeviceUsuario.Deletar(id)

            res.send({ messagem: "Deletado" })

        } catch (error) {
            res.status(500).send({
                menssage: error.message
            })
        }
    }

    async Login(req, res){
       try {
         const {email, senha } = req.body

        const token = await SeviceUsuario.Login(email, senha)

        res.status(200).send({token})


       } catch (error) {
            res.status(500).send({message: error.message})

       }
    }

}

export default new ControllerUsuario()