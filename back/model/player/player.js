const db = require('../db/db.js');
class player extends db{
    #model = {
        id: 'varchar(255) not null',
        name: 'varchar(150) not null',
        lastName: 'varchar(255) not null',
        email: 'varchar(255) not null'
    }
    constructor(){
        super('players');
        this.setColumns(this.#model);
        this.setPk('id');
    }
}
module.exports =player