import { Sequelize } from "sequelize";

class Database{

constructor() {
this.init()
}

init() {
this.db = new Sequelize({
    database: "exemplo2",
    host: "localhost",
    username: "root",
    dialect: "mysql",
    password: ""
})

}

}
export default new Database