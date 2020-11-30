const db = require('../db/db.js');
class player extends db{
    #model = {
        id: 'varchar(255) not null',
        name: 'varchar(150) not null',
        lastNames: 'varchar(255) not null',
        dni: 'varchar(255) not null',
        email: 'varchar(255) not null',
        password: 'TEXT not null',
        photo: 'TEXT default null'
    }
    constructor(){
        super('players');
        this.setColumns(this.#model);
        this.setPk('id');
    }
}
module.exports=player