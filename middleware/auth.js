import jwt from 'jsonwebtoken'

const segredo = "M3uCoisinha"

export default async function authMiddleware(req, res, next){
    console.log("AAAAAAAAAAAAAAQUI")
    try {
        
const token = req.headers['authorization']
console.log(token)
if(!token){
    throw new Error()
}

const decoded = jwt.verify(token, segredo)


console.log(decoded)
next()

    } catch (error) {
        res.status(403).send({message: "Usuário ou senha inválido" 
        })
    }

    
}