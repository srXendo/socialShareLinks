const db = require('../db/db.js');
class wrapper extends db{
    #model={
        id:'varchar(255) not null',
        name: 'varchar(255) not null',
        type: 'varchar(255) not null'
    };
    
    constructor(){
        super('wrappers');
        this.setColumns(this.#model)
        this.setPk('id')
    }
}
module.exports = wrapper