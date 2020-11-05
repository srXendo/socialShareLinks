const db = require('../db/db.js');

module.exports = class wrapper{
    #model={
        id_user: '',
        id_wrapper: '',
        id_role: ''
    };
    #db;
    constructor(){
        this.#db = new db('usersWrappersRoles', [...Object.keys(this.#model)]);
    }
    insert(con, id_user, id_wrapper, id_role){
        return this.#db.insert(con,[id_user, id_wrapper, id_role]);
    }
}