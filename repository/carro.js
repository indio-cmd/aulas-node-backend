import carro from '../model/carro.js'

//INSERT INTO carros (marca, ano, ) VALUES ("Fiat", 1998)

class RepositoryCarro{

     async Find(){
   const carros =  await carro.findAll()


return carros   
}
    async Create(){

     const  {marca, ano} = await carro.Create()


     return (marca, ano)

}
    async Update(){

}
 
    async Delete(){

}

}

export default new RepositoryCarro()