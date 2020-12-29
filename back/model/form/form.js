const db = require('../db/db.js');
class form extends db{
    #model={
        id:'varchar(255) not null',
        name: 'varchar(255) not null',
        questions: 'TEXT'
    };
    
    constructor(){
        super('form');
        this.setColumns(this.#model)
        this.setPk('id')
    }
}
module.exports = form