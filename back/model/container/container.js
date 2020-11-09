const db = require('../db/db.js');
module.exports = class container extends db{
    #model = {
        id: '',
        content: [] | ''
    };
    
    constructor(){
        super('Containers');
        this.setColumns( [...Object.keys(this.#model)])
    }

}