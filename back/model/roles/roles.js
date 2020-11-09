const db = require('../db/db.js');
const { v4 } = require('uuid');
module.exports = class wrapper extends db{
    #model={
        id: '',
        name: ''
    };
    #db;
    constructor(){
        super('Roles');
        this.setColumns( [...Object.keys(this.#model)])
    }
}