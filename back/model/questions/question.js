const db = require('../db/db.js');
class question extends db{
    #model={
        id:'varchar(255) not null',
        name: 'varchar(255) not null',
        type: 'varchar(255) not null',
        placeholder: 'varchar(255) not null',
        options: 'varchar(255) null'
    };
    
    constructor(){
        super('question');
        this.setColumns(this.#model)
        this.setPk('id')
    }
}
module.exports = question