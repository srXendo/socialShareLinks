const db = require('../db/db.js');

module.exports = class wrapper extends db{
    #model={
        id_user: '',
        id_wrapper: '',
        id_role: ''
    };

    constructor(){
        super('usersWrappersRoles');
        this.setColumns( [...Object.keys(this.#model)])
    }
    

}