module.exports=class roles{
    #model = require('../../model/roles/roles.js');
    constructor(){}
    async findRoles(con, id_role){
        let result = await new this.#model().select(con, '*', `id='${id_role}'`)

        return result[0];
    }
}