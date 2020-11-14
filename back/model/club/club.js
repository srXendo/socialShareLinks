const db = require('../db/db.js');

class club extends db{
    #model = {
        id: 'varchar(255) not null',
        name: 'varchar(255)'
    }
    constructor(){
        super('clubs');
        this.setColumns( this.#model );
        this.setPk('id')
    }
}
module.exports = club;