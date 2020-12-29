const db = require('../db/db.js');
class answers extends db{
    #model={
        id:'varchar(255) not null',
        answers: 'TEXT'
    };
    
    constructor(){
        super('answers');
        this.setColumns(this.#model)
        this.setPk('id')
    }
}
module.exports = answers