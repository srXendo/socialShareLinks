const db = require('../db/db.js');
const container = require('../container/container.js');
const wrapperContainer = require('./wrapperContainer.js');
const { v4 } = require('uuid');
module.exports = class wrapper{
    #model={
        id:'',
        name: '',
        type: 'folder' | 'link'
    };
    model={
        name: '',
        type: 'folder' | 'link',
        container: {}
    }
    #db;
    constructor(){
        this.#db = new db('Wrappers', [...Object.keys(this.#model)]);
    }
    insert(con, id, name, type){
        const id_container = v4();
        return new container().insert(con, id_container, "[]").then(()=>{
            return this.#db.insert(con, [id, name, type]);
        }).then(()=>{
            return new wrapperContainer().insert(con, id, id_container)
        })
    }
}