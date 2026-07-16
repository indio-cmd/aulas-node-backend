import express from "express"
 
 
const app = express()
 
app.use(express.json())
 


app.post("/ex1", (req, res) => {
    const {num1, num2} = req.body
const resultado = Number(num1) + Number(num2)
 
res.status(200).send({message: resultado})
})

app.post("/ex3", (req, res) =>{
const {p1, p2, p3, p4, p5, peso} = req.body
const resultado = Number(p1 + p2 + p3 + p4 + p5) / Number(peso)
 
res.status(200).send({message: resultado})
})

app.post("/ex2", (req, res) => {
    const {hora, salario} = req.body
    const resultado = Number(hora) * Number(salario)
 
    res.send({message: resultado})
})
app.post("/ex4", (req, res) => {
    const {celsius} = req.body
    const fahrenheit = Number((9 * (celsius) + 160) / 5) 
 
    res.send({message: fahrenheit})

})

    app.get("/ex5", (req, res) =>{
const {milhas} = req.params
const quilometro = milhas = 1.60934  
 
res.status(200).send({message: quilometro})
})

 app.listen(3000, () => {
    console.log("Servidor Rodando")
})