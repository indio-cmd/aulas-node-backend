import Database from "../config/databate.js"

class Carro{
    constructor(){
this.model =  Database.db.define("carros", {
    id: {
        type: Database.db.Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    marca: {
         type: Database.db.Sequelize.STRING,
    },
    ano: {
         type: Database.db.Sequelize.INTEGER,
    }

})
    }

}
export default new Carro().model