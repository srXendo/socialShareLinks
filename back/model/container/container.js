const db = require('../db/db.js');
class container extends db{
    #model = {
        id: 'varchar(255) not null',
        content: 'TEXT'
    };
    
    constructor(){
        super('containers');
        this.setColumns(this.#model)
        this.setPk('id')
    }

}
module.exports =container;