const db = require('../db/db.js');

class club extends db{
    #model = {
        id: 'varchar(255) not null',
        name: 'varchar(255) not null',
        photo: 'TEXT default null'
    }
    constructor(){
        super('clubs');
        this.setColumns( this.#model );
        this.setPk('id')
    }
}
module.exports = club;