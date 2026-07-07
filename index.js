import express from "express"
import bancoDeDados from "./repository/index.js"

const app = express()
// server ou app 
//Configura uma rota para o metodo HTTP GET na raiz ("/") do aplicativo
//app.get("/api/v1/somar", (req, res) => {

//console.log(req.query)

    //const num1 = Number(req.query.num1)
    //const num2 =  Number(req.query.num2)
   // const resultado = num1 + num2 
  //  //Retorna uma resposta JSON contendo uma mensagem "Hello Word"
 //   res.send({ resultado })
//})

app.get("/api/pessoa/:id", (req, res) => {
    const id = req.params.id

const pessoa = bancoDeDados.find(it => it.id == id)
if (!pessoa ){
    res.send({message: "pessoa não encontrada"})
    return
}

    res.send({pessoa})
})

app.get("/api/pessoa", (req, res) => {
const id = req.query.id
const name = req.query.name

if(!id || !name){
    res.send({message: "Favor informar o id e name "})
}

bancoDeDados.push({id, name})
console.log(bancoDeDados)
 res.send({message: "pessoa criada com sucesso"})
})











//Inicia o servidor Express na porta 3000 e define uma função de retorno de chamada
app.listen(3000, () => {
    //Exbice uma mensagem no console quando o servidor estiver ativo.
    console.log("servidor escutando na porta 3000")
})