import express from "express"
 
const router = express.Router()
 


router.post("/1", (req, res) => {
    const {num1, num2} = req.body
const resultado = Number(num1) + Number(num2)
 
res.status(200).send({message: resultado})
})

router.post("/3", (req, res) =>{
const {p1, p2, p3, p4, p5, peso} = req.body
const resultado = Number(p1 + p2 + p3 + p4 + p5) / Number(peso)
 
res.status(200).send({message: resultado})
})

router.post("/2", (req, res) => {
    const {hora, salario} = req.body
    const resultado = Number(hora) * Number(salario)
 
    res.send({message: resultado})
})
router.post("/4", (req, res) => {
    const {celsius} = req.body
    const fahrenheit = Number((9 * (celsius) + 160) / 5) 
 
    res.send({message: fahrenheit})

})
// não entendi
    router.get("/5", (req, res) =>{
const {milhas} = req.query
const quilometro = milhas * Number(1.60934)
 
res.status(200).send({message: quilometro})
})

router.get("/6", (req, res) => {
    const {segundos}= req.query
    const totalSegundos = Number(segundos)
    const horas = (totalSegundos / 3600)
    const minutos = ((totalSegundos % 3600) /60)
    const minutosegundo = totalSegundos % 60

    


res.status(200).send({ 
    horas,
    minutos,
    segundos:minutosegundo
})    
})

router.get("/7", (req, res) => {
const {quilometro} =req.query
const metros = quilometro * 1000
const centimetros = quilometro  * 100000


    res.status(200).send({
metros,
centimetros
    })
})

router.get("/8", (req,res) => {
    const {numero} = req.query
    const tabuada = `${numero} x 0 = ${numero * 0}`  +
    `${numero} x 1 = ${numero * 1}`  +
    `${numero} x 2 = ${numero * 2}`  +
    `${numero} x 3 = ${numero * 3}`  +
    `${numero} x 4 = ${numero * 4} ` +
    `${numero} x 5 = ${numero * 5}`  +
    `${numero} x 6 = ${numero * 6}`  +
    `${numero} x 7 = ${numero * 7}`  +
    `${numero} x 8 = ${numero * 8}`  +
    `${numero} x 9 = ${numero * 9}`  +
    `${numero} x 10 = ${numero * 10}` 

res.status(200).send({message:
tabuada
})
})


export default router