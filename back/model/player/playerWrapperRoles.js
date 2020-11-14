const db = require('../db/db.js');
function getModel(model){
    const models = require('../models.js')
    console.log(new models[model]().getTName())
    return new models[model]();
}
class playerWrapperRoles extends db{
    #model={
        id_player: 'varchar(255) not null',
        id_wrapper: 'varchar(255) not null',
        id_role: 'varchar(255) not null'
    };
    #fk = [
        {   
            columnKey: 'id_player',
            tableReference: getModel('player').getTName(),
            idReference: getModel('player').getPk()
        },
        {   
            columnKey: 'id_wrapper',
            tableReference: getModel('wrapper').getTName(),
            idReference: getModel('wrapper').getPk()
        },
        {   
            columnKey: 'id_role',
            tableReference:getModel('roles').getTName(),
            idReference: getModel('roles').getPk()
        }
    ]
    constructor(){
        super('playerswrappersRoles')
        this.setColumns(this.#model)
        this.setFk(this.#fk)
    }
}
module.exports = playerWrapperRoles;