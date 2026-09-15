import usuario from '../model/usuario.js'

//INSERT INTO carros (email, senha, ) VALUES ("Fiat", 1998)

class RepositoryUsuario{

     async Find(){
   const usuarios =  await usuario.findAll()


return usuarios   
}
    async Detalhe(id){
        const usuarioDetalhe = await usuario.findByPk(id)

        return usuarioDetalhe
    }




    async Create(email, senha){

     const  usuarioCreate = await usuario.create({email, senha})


     return usuarioCreate

}

    async Update(id, email, senha){
        const usuarioUpdate = await usuario.findByPk( id)

if(!usuarioUpdate){
    throw new Error("carro nao encontrado")
}


usuarioUpdate.email = email
usuarioUpdate.senha = senha

await usuarioUpdate.save()

        return usuarioUpdate

}
 
    async Delete(id){
        const usuarioDeletar = await usuario.findByPk(id)

if(!usuarioDeletar){
    throw new Error("Carro nao encontrado")
}

    await  usuarioDeletar.destroy()

    return usuarioDeletar
}


async FindByEmail(email){
return usuario.findOne({where: {email}})
}

}

export default new RepositoryUsuario()