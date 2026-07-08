import express from "express"


const app = express()


//somar
app.get("/api/v1/somar", (req, res) => {
    const {num1, num2} = req.query
const resultado = Number(num1) + Number(num2)

res.status(200).send({message: resultado})
})
//subtrair
app.get("/api/v1subtrair", (req, res) =>{
const {num1, num2} = req.query
const resultado = Number(num1) - Number(num2)

res.status(200).send({message: resultado})
})
//mult
app.get("/api/v1/mult", (req, res) => {
    const {num1, num2} = req.query
    const resultado = Number(num1) * Number(num2)

    res.send({message: resultado})
})
//div
app.get("/api/v1/divisao", (req, res) => {
    const {num1, num2 } = req.query
    const resultado = Number(num1) / Number(num2)

    res.send({message: resultado})
    
})


app.listen(3000, () => {
    //Exbice uma mensagem no console quando o servidor estiver ativo.
    console.log("servidor escutando na porta 3000")
})