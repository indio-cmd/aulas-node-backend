import Database from "../config/databate.js"

class Usuario{
    constructor(){
this.model =  Database.db.define("usuarios", {
    id: {
        type: Database.db.Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    email: {
         type: Database.db.Sequelize.STRING,
         unique: true
    },
    senha: {
         type: Database.db.Sequelize.STRING,
         unique: true
    }

})
    }

}
export default new Usuario().model