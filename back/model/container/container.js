const db = require('../db/db.js');
class container extends db{
    #model = {
        id: 'varchar(255) not null',
        content: 'varchar(255)'
    };
    
    constructor(){
        super('containers');
        this.setColumns(this.#model)
        this.setPk('id')
    }

}
module.exports =container;