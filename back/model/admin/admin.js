const db = require('../db/db.js');
class admin extends db{
    #model = {
        id: 'varchar(255) not null',
        email: 'varchar(255) not null',
        password: 'TEXT not null',
    }
    constructor(){
        super('admin');
        this.setColumns(this.#model);
        this.setPk('id');
    }
}
module.exports=admin