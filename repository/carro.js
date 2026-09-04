import carro from '../model/carro.js'

//INSERT INTO carros (marca, ano, ) VALUES ("Fiat", 1998)

class RepositoryCarro{

     async Find(){
   const carros =  await carro.findAll()


return carros   
}
    async Detalhe(id){
        const coisas = await carro.findByPk(id)

        return coisas
    }




    async Create(marca, ano){

     const  coisinhas = await carro.create({marca, ano})


     return coisinhas

}

    async Update(id, marca, ano){
        const carrinhoUpdate = await carro.findByPk( id)

if(!carrinhoUpdate){
    throw new Error("carro nao encontrado")
}


carrinhoUpdate.marca = marca
carrinhoUpdate.ano = ano

await carrinhoUpdate.save()

        return carrinhoUpdate

}
 
    async Delete(id){
        const carroDeletar = await carro.findByPk(id)

if(!carroDeletar){
    throw new Error("Carro nao encontrado")
}

    await  carroDeletar.destroy()

    return carroDeletar

}

}

export default new RepositoryCarro()