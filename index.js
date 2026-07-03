import express from "express"

const app = express()
// server ou app 
//Configura uma rota para o metodo HTTP GET na raiz ("/") do aplicativo
app.get("/api/v1/somar", (req, res) => {

console.log(req.query)

    const num1 = Number(req.query.num1)
    const num2 =  Number(req.query.num2)
    const resultado = num1 + num2 
    //Retorna uma resposta JSON contendo uma mensagem "Hello Word"
    res.send({ resultado })
})
//Inicia o servidor Express na porta 3000 e define uma função de retorno de chamada
app.listen(3000, () => {
    //Exbice uma mensagem no console quando o servidor estiver ativo.
    console.log("servidor ouvindo na porta 3000")
})