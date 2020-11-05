const db = require('../db/db.js');
module.exports = class container{
    #model = {
        id: '',
        content: [] | ''
    };
    #db;
    constructor(){
       this.#db= new db('Containers', [...Object.keys(this.#model)]);
    }
    insert(con, id, content){
        return this.#db.insert(con,[ id, content ]);
    }
}