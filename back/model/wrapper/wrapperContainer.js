const db = require('../db/db.js');
const { v4 } = require('uuid');

module.exports = class wrapperContainer{
    #model={
        id_wrapper:'',
        id_container: '',
        
    };
    #db;
    constructor(){
        this.#db = new db('WrappersContainers', [...Object.keys(this.#model)]);
    }
    insert(con, id_wrapper, id_container){
        return this.#db.insert(con, [id_wrapper, id_container]);
    }
}