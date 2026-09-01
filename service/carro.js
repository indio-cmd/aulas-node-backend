import RepositoryCarro from "../repository/carro.js"



class  SeviceCarro{
    // thwrow 
    // é para separar em camadas seu código
    // Core - Regra de Negocio
    async Buscar() {
    return RepositoryCarro.Find() 
    }

    Detalhe(id){
//         if(!id) {
//             throw new Error("Favor informar o ID")
//         }
//             const carro = RepositoryCarro.find(it => it.d === id)

// if(!carro){
//     throw new Error(`ID ${id} do carro não encontrado`)
// }

//             return carro

    }
    //Função (parametros, parametros, parametros)
 async   Criar(id, marca, ano){
        
        
            if (!id || !marca || !ano) {
                throw new Error ( "favor informar todos os dados" )
            }

            RepositoryCarro.push({ id, marca, ano })
    
            return { id, marca, ano }
        }

    Alterar(){

    }

    Deletar(id){

// if(!id){
//     throw  new Error("Favor informar o ID")
// }
//             RepositoryCarro.splice(it => it.id === id, 1)
// return id 
    }
}
export default new SeviceCarro()