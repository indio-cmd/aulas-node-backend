import  bcrypt from 'bcrypt'
import RepositoryUsuario from "../repository/usuario.js"
import jwt from "jsonwebtoken"

const segredo = "M3uCoisinha"

class  SeviceUsuario{
    // thwrow 
    // é para separar em camadas seu código
    // Core - Regra de Negocio
    async Buscar() {
    return RepositoryUsuario.Find() 
    }

  async  Detalhe(id){
        if(!id) {
            throw new Error("Favor informar o ID")
        }
            const usuario = await RepositoryUsuario.Find(id)

        if(!usuario){
                 throw new Error(`ID ${id} do usuario não encontrado`)
}

            return usuario

    }
    //Função (parametros, parametros, parametros)
 async   Criar( email, senha){
            if ( !email || !senha) {
                throw new Error ( "favor informar todos os dados" )
            }

            const carroCriar = await RepositoryUsuario.Create( email, senha)
    
            return carroCriar
        }

   async Alterar(id, email, senha){

 const pedidousuario = await RepositoryUsuario.Update(id, email, senha)
 
    if(!id || !email || !senha){
        throw new Error ("parametro invalido")
    }

return pedidousuario

}


   async Deletar(id){

if(!id){
    throw  new Error("Favor informar o ID")
}
          const usuarioDeletar = await RepositoryUsuario.Delete(id)

return usuarioDeletar
    }


    async Login(email, senha){
        if(!email || !senha){
            throw new Error("Email ou senha inválidos")
        }

        const usuario = await RepositoryUsuario.FindByEmail(email)

        if(!usuario){
            throw new Error("Email ou senha inválido")
        }

        if(
            !(await bcrypt.compare (String(senha), usuario.senha) )
        ){
            throw new Error("Email ou senha inválido")
        }
    
        return jwt.sign(
            {id: usuario.id, email },
            segredo,
            { expiresIn: 60 * 60 }
        )
    }
}


export default new SeviceUsuario()