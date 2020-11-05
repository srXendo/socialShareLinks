const db = require('../db/db.js');
const { v4 } = require('uuid');
module.exports = class wrapper{
    #model={
        id: '',
        name: ''
    };
    #db;
    constructor(){
        this.#db = new db('Roles', [...Object.keys(this.#model)]);
    }
    insert(con, id, name){
        return this.#db.insert(con,[ id, name ]);
    }
}