const db = require('../db/db.js');
class roles extends db{
    #model={
        id: 'varchar(255) not null',
        name: 'varchar(255)'
    };
    constructor(){
        super('roles');
        this.setColumns(this.#model)
        this.setPk('id')
    }
}
module.exports = roles;