const db = require('../db/db.js');
function getModel(model){
    const models = require('../models.js')
    return new models[model]();
}
class playerAnswersRoles extends db{
    #model={
        id_player: 'varchar(255) not null',
        id_answers: 'varchar(255) not null',
        id_role: 'varchar(255) not null'
    };
    #fk = [
        {   
            columnKey: 'id_player',
            tableReference: getModel('player').getTName(),
            idReference: getModel('player').getPk()
        },
        {   
            columnKey: 'id_answers',
            tableReference: getModel('answers').getTName(),
            idReference: getModel('answers').getPk()
        },
        {   
            columnKey: 'id_role',
            tableReference:getModel('roles').getTName(),
            idReference: getModel('roles').getPk()
        }
    ]
    constructor(){
        super('playersAnswersRoles')
        this.setColumns(this.#model)
        this.setFk(this.#fk)
    }
}
module.exports = playerAnswersRoles;