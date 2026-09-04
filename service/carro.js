import RepositoryCarro from "../repository/carro.js"



class  SeviceCarro{
    // thwrow 
    // é para separar em camadas seu código
    // Core - Regra de Negocio
    async Buscar() {
    return RepositoryCarro.Find() 
    }

  async  Detalhe(id){
        if(!id) {
            throw new Error("Favor informar o ID")
        }
            const carro = await RepositoryCarro.Find(id)

        if(!carro){
                 throw new Error(`ID ${id} do carro não encontrado`)
}

            return carro

    }
    //Função (parametros, parametros, parametros)
 async   Criar( marca, ano){
            if ( !marca || !ano) {
                throw new Error ( "favor informar todos os dados" )
            }

            const carroCriar = await RepositoryCarro.Create( marca, ano)
    
            return carroCriar
        }

   async Alterar(id, marca, ano){

 const pedido = await RepositoryCarro.Update(id, marca, ano)
 
    if(!id || !ano || !marca){
        throw new Error ("parametro invalido")
    }





return pedido

}


   async Deletar(id){

if(!id){
    throw  new Error("Favor informar o ID")
}
          const carroDeletar = await RepositoryCarro.Delete(id)

return carroDeletar
    }
}
export default new SeviceCarro()